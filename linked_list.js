'use strict';

/**
	Doubly-Linked List
*/
function LinkedList(){
	this._length = 0;
	this.head = null;
	this.tail = null;

	Object.defineProperty(this, 'length', {
		get : function (){
			return this._length;
		}.bind(this);
	});
}
/**
 * @param {any}
 */
function Node(value){
	this.value  = value;
	this.next   = null;
	this.prev   = null;
}
/**
 * Checks if the linkedlist is empty
 *  @return Boolean
 */
LinkedList.prototype.IsEmpty = function(){
	return this.length == 0;
};
/**
 * @param {Object} n
 * @param {int} [index] [position of the object in the linked list]
 */
LinkedList.prototype.add = function(n , index){
	 if(index < 0 || index > this.length){
	 	throw new Error('Index Out Of Bounds');
	 }
	 if (index == undefined || index == null || isNan(index)){
	 	throw new Error('Invalid Index');
	 }
	 var node = new Node(n);
	 var nodeAtIndex;
	 if(index < this.length)
	 {
		 if(index == 0){
		 	nodeAtIndex = this.head;
		 	this.head = node;	 	
		 }else{
		 	nodeAtIndex = this.getNode(index);
		 	node.prev = nodeAtIndex.prev;
		 }
		 node.next = nodeAtIndex;
		 nodeAtIndex.prev = node;	 	
	 }
};

/**
 * @param {Number} [index] [Return Node At Index]
 */

LinkedList.prototype.getNode = function(index){
	 if(index < 0 || index > this.length){
	 	throw new Error('Index Out Of Bounds');
	 }
	 if (index == undefined || index == null || isNan(index)){
	 	throw new Error('Invalid Index');
	 }
	 var node = this.head;
	 for (int i = 1; i <= index ; i++){
	 	node = node.next;
	 }
	 return node;
};