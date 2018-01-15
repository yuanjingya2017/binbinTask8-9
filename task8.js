var preOrder = document.getElementsByTagName('input')[0];
var widthOrder = document.getElementsByTagName('input')[1];
var lastOrder = document.getElementsByTagName('input')[2];
var root = document.getElementsByClassName('root')[0];
var treeNodes=[];
var arrdeep = 0;
preOrder.onclick = function () {
    treeNodes=[];
    pre(root);
    changeColor();
    console.log(treeNodes)
}
widthOrder.onclick = function () {
    treeNodes=[];
    width(root,arrdeep,0);
    console.log(treeNodes)
}
lastOrder.onclick = function () {
    treeNodes=[];
    last(root);
    changeColor();
    console.log(treeNodes)
}
function pre(r) {
    if(r!=null){
        treeNodes.push(r);
        var child = r.childNodes;
        if(child.length>0){
            for(var i=0;i<child.length;i++){
                if(child[i].nodeName=='DIV'){
                    pre(child[i]);
                }
            }
        }
    }
}
function width(r) {
    if(r!=null){
        treeNodes.push(r);
        var child = r.childNodes;
        if(child.length>0){
            arrdeep++;
            for(var i=0;i<child.length;i++){
                if(child[i].nodeName=='DIV'){
                    width(child[i]);
                }
            }
        }
    }
}
function last(r) {
    if(r!=null){
        var child = r.childNodes;
        if(child.length){
            for(var i=0;i<child.length;i++){
                if(child[i].nodeName=='DIV'){
                    last(child[i]);
                }
            }
        }
        treeNodes.push(r);
    }
}
function changeColor() {
    var i=0;
    treeNodes[i].style.backgroundColor = '#F34949';
    // var _this = this;
    // for(var i=0;i<treeNodes.length;i++) {
    //     var node = treeNodes[i];
    //     node.style.backgroundColor = 'red';
    //     setTimeout(function(){
    //         resetbgColor(node);
    //     },500*i);
    // }
    timer=setInterval(function(){
        i++;
        if(i<treeNodes.length){
            treeNodes[i-1].style.backgroundColor="white";
            treeNodes[i].style.backgroundColor="#F34949";
        }else{
            clearInterval(timer);
            treeNodes[i-1].style.backgroundColor="white";
        }
    },300);

}
function resetbgColor(obj) {
    obj.style.backgroundColor = 'white';
}