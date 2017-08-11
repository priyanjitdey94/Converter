class Replace{
    constructor(){

    }

    doReplace(value,pos){
        if(value===undefined || pos===undefined){
            return 'Illegal Arguement in doReplace';
        }
        window.arr[pos]=value+'';
        return window.arr[pos];
    }
}

export default Replace;