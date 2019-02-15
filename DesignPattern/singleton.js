/*var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
 
    alert("Same instance? " + (instance1 === instance2));  
    console.log("hello!")
}
*/

/*var mySingleton= function()
{
    var instance;

    function init()
    {
        function privateMethod()
        {
          console.log("Iam private");
        }
        var privateVariable="Iam also private";

        var privateRandomNumber=Math.random();

        return {
            publicMethod : function()
            {
                console.log("The public can see me!")
            },
            publicProperty : "I am also public!"


        }

    }

}
*/

var mySingleton = (function () {

    // Instance stores a reference to the Singleton
    var instance;
  
    function init() {
  
      // Private methods and variables
      function privateMethod(){
          console.log( "I am private" );
      }
  
      var privateVariable = "Im private"; 
      var privateRandomNumber=Math.random();
  
      return {     
        // Public methods and variables
        publicMethod: function () {
          console.log( "The public can see me!" );
        },
  
        publicProperty: "I am public",     
        getRandomNumber : function()
        {
            return privateRandomNumber;

        }
      };     
    };
  
    return {
  
      // Get the Singleton instance if one exists
      getInstance: function () {     
        if ( !instance ) {
          instance = init();
        }     
        return instance;
      }     
    };
  
  })();
  
  var singleA = mySingleton.getInstance();
 var singleB = mySingleton.getInstance();
 singleA.publicMethod();
 console.log(singleA.publicProperty);
  console.log(singleA.getRandomNumber==singleB.getRandomNumber)