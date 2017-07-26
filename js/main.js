//Linked List
function listNode(data){
    this.data = data;
    this.next = null;
}

function linkedList(){
    this.head = new listNode("head");
    this.current = this.head;
}

var app = new Vue({
    el: "#app",

    data: {
        selectedFunction: "insert",
        nodeData: "",
        linkedList: new linkedList(),
        displayedList: "",
        //displayedListArray: [],

        stackData: "",
        selectedStackOp: "push",
        theStack: [],

        queueData: "",
        selectedQueueOp: "enqueue",
        theQueue: []
    },

    methods: {
        buildList: function(){
            var tempNode = this.linkedList.head;
            var newList = "";
            //var newListArray = [];
            while(tempNode != null){
                tempNode != this.linkedList.current ? newList = newList.concat(tempNode.data+" -> ") : newList = newList.concat("!  "+tempNode.data+"  ! -> ");
                //tempNode != this.linkedList.current ? newListArray.push(tempNode.data) : newListArray.push(tempNode.data);

                tempNode = tempNode.next;
            }
            this.displayedList = newList;
        },
        buildRandomList: function(){
            for(var i = 0; i < 10; i++){
                var rand = Math.floor((Math.random()*20)+1);
                this.nodeData = rand;
                this.listOperation("insert");
            }
            this.nodeData = "";
        },
        listOperation: function(op){
            switch(op){

                case "insert":
                    var newElem = new listNode(this.nodeData);

                    //Liste ist leer
                    if(this.linkedList.head.next == null){
                        this.linkedList.head.next = newElem;
                        this.linkedList.current = this.linkedList.head;
                    }

                    //Liste hat mind. 1 Eintrag
                    else{
                        var ancestor = this.linkedList.current.next;
                        newElem.next = ancestor;
                        this.linkedList.current.next = newElem;
                    }
                    break;

                case "remove":
                    if(this.linkedList.current.next != null) {
                        var ancestor = this.linkedList.current.next.next;
                        this.linkedList.current.next = ancestor;
                    }
                    break;

                case "movetofront":
                    this.linkedList.current = this.linkedList.head;
                    break;

                case "next":
                    if(this.linkedList.current.next != null){
                        this.linkedList.current = this.linkedList.current.next;
                    }
                    break;

                case "end":
                    this.linkedList.current.next == null ? alert("true") : alert("false");
                    break;

                case "empty":
                    this.linkedList.head.next == null ? alert("true") : alert("false");
                    break;

                case "read":
                    if(this.linkedList.current.next != null){
                        alert(this.linkedList.current.next.data);
                    }
                    break;

                case "write":
                    if(this.linkedList.current.next != null){
                        this.linkedList.current.next.data = this.nodeData;
                    }
                    break;

                case "search":
                    var searcher = this.linkedList.current;
                    while(searcher.next.data != this.nodeData) {
                        searcher = searcher.next;
                    }
                    this.linkedList.current = searcher;
                    break;
            }
            this.buildList();
            this.nodeData = "";
        },
        stackOperation: function(op){
            switch(op){
                case "push":
                    this.theStack.splice(0,0,this.stackData);
                    this.stackData = "";
                    break;
                case "pop":
                    this.theStack.splice(0,1);
                    break;
            }
        },
        buildRandomStack: function(){
            for(var i = 0; i < 10; i++){
                var rand = Math.floor((20*Math.random())+1);
                this.stackData = rand;
                this.stackOperation("push");
            }
            this.stackData = "";
        },
        queueOperation: function(op){
            switch(op){
                case "enqueue":
                    this.theQueue.splice(this.theQueue.length,0,this.queueData);
                    break;

                case "dequeue":
                    this.theQueue.splice(0,1);
                    break;
            }
            this.queueData = "";
            console.log("done");
        },
        buildRandomQueue: function(){
            for(var i = 0; i < 10; i++){
                var rand = Math.floor((20*Math.random())+1);
                this.queueData = rand;
                this.queueOperation("enqueue");
            }
            this.queueData = "";
        }
    }
});