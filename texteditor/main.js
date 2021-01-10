document.getElementsByTagName('iframe')[0].focus();

function enableDesignMode(){
    editor.document.designMode = 'On';
}

function execCmd(command, arg=null){
    editor.document.execCommand(command, false, arg);
}