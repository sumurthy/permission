//import {loadFile, writeFile}  from './modules/fileops'
// require("babel-core").transform("code", options);

//import {loadFile, writeFile}  from './modules/fileops'
import FileOps from './modules/fileops'

/**
 * STARTING: Load input files and process each file and each line within.
 */
console.log('* Starting Program...')
SetUp.cleanupOutput('./out')
console.log('');
let inputFiles = FileOps.walkFiles('./input', '.json')
inputFiles.forEach((e) => {
    console.log('** Processing: ' + e);
    let fileObj = JSON.parse(FileOps.loadJson(`./input/${e}`))
    if (fileObj['summary'][0]) {
        packageObj['summary'] = fileObj['summary'][0]['value']
    }
    else {
        packageObj['summary'] = ''
    }

    if (fileObj['remarks'][0]) {
        packageObj['remarks'] = fileObj['remarks'][0]['value']
    }
    else {
        packageObj['remarks'] = ''
    }
    processModule(fileObj['exports'], e.split('.json')[0])
    file_reset()
})
FileOps.writeObject(allTypes, `./types/allTypes.json`)
FileOps.writeObject(allMembers, `./types/allMembers.json`)

/**
 * End program
 */

function processModule(packageContent={}, fileName="error") {
    toc.push(Utils.moduleTocEntry(fileName))

    Object.keys(packageContent).forEach((e) => {
        //console.log("**** Processing: " + e + " " + packageObj[e]['kind']);

        switch (packageContent[e]['kind']) {
            case 'class':
                classObj[e] = processClassInterface(packageContent[e], e.toLowerCase(), fileName.toLowerCase(), 'class')
                nClass++
                break;
            case 'interface':
                iObj[e] = processClassInterface(packageContent[e], e.toLowerCase(), fileName.toLowerCase(), 'interface')
                nInterface++
                break;
            case 'enum':
                enumObj[e] = processEnum(packageContent[e])
                nEnum++
                break;
            case 'function':
                functionObj[e] = Utils.processMethod(packageContent[e], e)
                nFunction++
                break;
            default:
                console.log('ERROR Unmatched type: ' + packageContent[e]['kind']);
                break;
        }
        allTypes[e] = '../../' + fileName.toLowerCase() + '/' + packageContent[e]['kind'] + '/' + e.toLowerCase() + '.md'

    })

    FileOps.writeObject(enumObj, `./json/${fileName}_enum.json`)
    FileOps.writeObject(packageObj, `./json/${fileName}_package.json`)
    FileOps.writeObject(functionObj, `./json/${fileName}_function.json`)
    FileOps.writeObject(iObj, `./json/${fileName}_interface.json`)
    FileOps.writeObject(classObj, `./json/${fileName}_class.json`)
    FileOps.writeObject(typeObj, `./json/${fileName}_type.json`)
    FileOps.writeObject(variableObj, `./json/${fileName}_variable.json`)

    console.log(`----> interface = ${nInterface}, class = ${nClass}, function = ${nFunction}, enum = ${nEnum}`);
    console.log('');
    file_reset()
}