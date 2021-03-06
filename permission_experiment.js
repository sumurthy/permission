// require("babel-core").transform("code", options);

import FileOps from './modules/fileops'
import Setup from './modules/fileops'

const INPUT = 'betainput'
const OUTPUT = 'betaoutput_experiment'
let TOTAL = 0
let EXCOUNT = 0
const MDTABLE = `\n|Permission type      | Permissions (from least to most privileged)              | \n|:--------------------|:---------------------------------------------------------| \n|Delegated (work or school account) | @business    | \n|Delegated (personal Microsoft account) | @personal    | \n|Application | @admin | \n`

function getSubScopes (full=[], sub=[]) {
    let list = []
    sub.forEach((item) => {
        if (full.includes(item)) {
            list.push(item)
        }
    })
    if (list.length > 0) { 
        return list
    } else { 
        return ['Not supported.']
    }
}

function getScopes(line) {

    if (line.endsWith('.')) {
        // String last period. 
        line = line.substring(0, line.length - 1);
    }
    if (line.toLowerCase().includes(' and ')) {
        throw BreakException
    }  
    let delimiter = ''
    let delimiterFound = false
    let tempArray = []
    // Remove *, - and _ (formatting, not important to retain)
    let temp = line.replace(/_/g,'')
    temp = temp.replace(/\*/g,'')
    temp = temp.replace(/\-/g,'')

    // Handle this: Notes.Create, Notes.Read, Notes.ReadWrite, Notes.Read.All, or Notes.ReadWrite.All 
    if (temp.includes(',') && temp.includes(' or ')) {
        temp = temp.replace(" or ", '')
    }   
    // Identify the delimiter
    if (temp.includes(' or ')) {
        delimiter = ' or '
        delimiterFound = true
    } else if(temp.includes(' Or ')) {
        delimiter = 'Or'
        delimiterFound = true
    } else if(temp.includes(' OR ')) {
        delimiter = 'OR'
        delimiterFound = true
    } else if(temp.includes(',')) {
        delimiter = ','
        delimiterFound = true
    } else if(temp.includes(';')) {
        delimiter = ';'
        delimiterFound = true
    }
    if (delimiterFound) {
        tempArray = temp.split(delimiter)
    } else {
        tempArray.push(temp)
    }
    // console.log('returning: ' + tempArray)
    return tempArray

}

function processPermLines(permLines, name) {
    let oPermLines = []
    let scopesArray = []    
    let mdDone = false           
    try {
        let permissionLine = false
        let inScope = false
        permLines.forEach((line) => {
            let oLine = line
            if (line === '## Prerequisites') {
                oLine = '## Permissions'
                oPermLines.push(oLine)
                return
            }            
            // console.log(line)
            line = line.replace('https://', '')
            if (line.includes('The following table lists the suggested permission needed for each resource')) {
                console.log('!! Multiple scopes based on resources.')
                throw BreakException
            }

            if (line.startsWith('One of the following **scope') || line.startsWith('The following **scope') || line.startsWith('One of the following scopes') || line.startsWith('The following **permis') || line.startsWith('The following scope') || line.startsWith('One of the following [permission scopes]') || line.startsWith('One of the following **permi')) {
                inScope = true
                if (line.includes('depending on')) {
                    console.log('Found the *depending* word')
                    throw BreakException
                }
                let sArray = line.split(':')
                if (sArray[1].trim()) {
                    inScope = false
                    oLine = 'One of the following permissions is required to call this API. To learn more, including how to choose permissions, see [Permissions](../../../concepts/permissions_reference.md).'              
                    oPermLines.push(oLine)
                    // Get scopes on this line
                    scopesArray = scopesArray.concat(getScopes(sArray[1]))
                    // Trim the array                                        
                    scopesArray = scopesArray.map(s => s.trim());
                    scopesArray.forEach((e) => {
                        if (!WORK.includes(e) && !PERSONAL.includes(e) && !APPLICATION.includes(e)) {
                            console.log('!! Invalid scope: ' + e)
                            throw BreakException
                        }
                    })

                    if (line.endsWith(', or') || line.endsWith(' or') || line.endsWith(',')) {
                        inScope = true
                    }    
                    return            
                } else {
                    oLine = 'One of the following permissions is required to call this API. To learn more, including how to choose permissions, see [Permissions](../../../concepts/permissions_reference.md).'              
                    oPermLines.push(oLine)
                    return                   
                }
            }
            // If you come across the Note:, write permission array and move on. 
            if (line.toLowerCase().includes('note:') || line.toLowerCase().includes('> currently') || line.toLowerCase().includes('> **note')) {
                inScope = false
                mdDone = true
                if (scopesArray.length === 0) {
                    console.log ('!! No scopes defined in permission section: ' + name )
                }                
                let p = MDTABLE.replace('@business', getSubScopes(WORK, scopesArray).join(', '))
                p = p.replace('@personal', getSubScopes(PERSONAL, scopesArray).join(', '))
                p = p.replace('@admin', getSubScopes(APPLICATION, scopesArray).join(', '))
                oPermLines.push(p)
                oPermLines.push(line)

                return
            } 

            // End if you see end of array marker.
            if (line.toLowerCase().includes('--end--')) {
                if (!mdDone) {
                    if (scopesArray.length === 0) {
                        console.log ('!! No scopes defined in permission section.: ' + name )
                    }                    
                    let p = MDTABLE.replace('@business', getSubScopes(WORK, scopesArray).join(', '))
                    p = p.replace('@personal', getSubScopes(PERSONAL, scopesArray).join(', '))
                    p = p.replace('@admin', getSubScopes(APPLICATION, scopesArray).join(', '))
                    oPermLines.push(p)
                }
                return
            }                          
            if (!inScope) {
                oPermLines.push(oLine)
                return                    
            } else {
                if (!line.trim()) { return }  
                // Throw exceptions for files that requires manual intervention. 
                if (line.toLowerCase().includes(' if ')) {
                    throw BreakException
                }
                if (line.toLowerCase().includes(' and ')) {
                    throw BreakException
                }                   
                if (line.toLowerCase().includes(':')) {
                    throw BreakException
                }
                if (line.toLowerCase().includes(' - ')) {
                    throw BreakException
                }                                                
                // Get scopes on each line
                scopesArray = scopesArray.concat(getScopes(line))
                // Trim the array
                scopesArray = scopesArray.map(s => s.trim());
                scopesArray.forEach((e) => {
                    if (!WORK.includes(e) && !PERSONAL.includes(e) && !APPLICATION.includes(e)) {
                        console.log ('!! Invalid scope: ' + e )
                        throw BreakException
                    }
                })
            }
        })
    } catch (e) {
        console.log ('Skipping unusual file: ' + name)
        // Don't change the permission section and remove --end--. 
        return permLines.slice(0,-1)
    }
    return oPermLines
}

function processModule(api, name) {
    // console.log('>> Start Api: ' + name);

    // if (name.includes('extension') && !name.startsWith('schemaextension')) {
    //     console.log ('Skipping Extension API: ' + name)
    //     return
    // }
    let inPermission = false
    let exampleFound = false
    let responseFound = false
    let permissionWritten = false
    let outApi = []
    let permLines = []
    let oPermLines = []
    api.forEach((line) => {

        if (line.startsWith('## Response')) {
            responseFound = true
        }

        if (responseFound) {
            if (line.startsWith('## Example') && !exampleFound) {
                exampleFound = true
                EXCOUNT = EXCOUNT + 1
            }            
        }

        let oLine = line
        if (line.startsWith('## Prerequisites')) {
            inPermission = true
            permLines.push(line)
            return
        } else {
            if (inPermission && line.startsWith('#')) {
                inPermission = false
                permLines.push('--end--')
                oPermLines = processPermLines(permLines, name)    
                // outApi.push(...oPermLines)
            } 
            if (inPermission) {
                permLines.push(line)
                return
            }
            if (exampleFound && !permissionWritten) {
                outApi.push(...oPermLines)      
                permissionWritten = true          
            }
            outApi.push(oLine)
        }
    })
    if (permLines.length === 0) {
        console.log('!! No permission section at all: ' + name)
    }
    FileOps.writeFile(outApi, `./${OUTPUT}/${name}`)    
    if (!permissionWritten) {
        console.log("Permission not written: " + name)
    }
    // console.log('Done. ' + name + ', input #lines: ' + api.length + ', output #lines:' + outApi.length);

}

/**
 * STARTING: Load input files and process each file and each line within.
 */
console.log('* Starting Program...')
FileOps.cleanupOutput('./report')
FileOps.cleanupOutput(`./${OUTPUT}`)

let WORK = FileOps.loadFile(`./scopes/work.txt`)
let PERSONAL = FileOps.loadFile(`./scopes/personal.txt`)
let APPLICATION = FileOps.loadFile(`./scopes/app.txt`)

console.log('');
let inputFiles = FileOps.walkFiles(`./${INPUT}`, '.md')
inputFiles.forEach((e) => {
    TOTAL = TOTAL + 1
    let api = FileOps.loadFile(`./${INPUT}/${e}`)
    // File Filter
    // if (e != 'group_list.md' && e != 'post_get.md' ) { return }
    processModule(api, e)
})
console.log('End of program. ' + TOTAL + ' : ' + EXCOUNT);



/**
 * End program
*/
