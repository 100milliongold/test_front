$(function() {
    $('#tree').jstree({
        'core' : {
            'themes': {
                'name': 'proton',
                'responsive': true
            },
            'data' : getData,
        } 
    });
});

var indexStatus = function(){
    
}


var getData = function(obj, callback){
    callback.call(this, [
       { "id" : "ajson1", "parent" : "#", "text" : "Simple root node" },
       { "id" : "ajson2", "parent" : "#", "text" : "Root node 2" },
       { "id" : "ajson3", "parent" : "ajson2", "text" : "Child 1" },
       { "id" : "ajson4", "parent" : "ajson2", "text" : "Child 2" },
    ]);
}