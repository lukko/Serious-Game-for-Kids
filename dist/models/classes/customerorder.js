"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();var _get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===void 0){var parent=Object.getPrototypeOf(object);if(null===parent)return void 0;return get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;return void 0===getter?void 0:getter.call(receiver)};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return call&&("object"==typeof call||"function"==typeof call)?call:self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var CustomerOrder=function(_OrderCore){function CustomerOrder(a){return _classCallCheck(this,CustomerOrder),_possibleConstructorReturn(this,(CustomerOrder.__proto__||Object.getPrototypeOf(CustomerOrder)).call(this,a,0))}return _inherits(CustomerOrder,_OrderCore),_createClass(CustomerOrder,[{key:"orderCost",value:function orderCost(){return _get(CustomerOrder.prototype.__proto__||Object.getPrototypeOf(CustomerOrder.prototype),"orderCost",this).call(this,!0)}}]),CustomerOrder}(OrderCore);