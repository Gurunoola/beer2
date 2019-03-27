jQuery =window.$;

setTimeout(function(){
start();

},5000)

function start()
{
			console.log('hello');			
			startChecking();


}

function startChecking() {
    myVar = setInterval(function() {
    	WhatsappmainDiv = document.getElementById('app');
        if (localStorage.getItem('last-wid')) {
            sayLoggedIn()
        }
    }, 500);
}

function sayLoggedIn() 
{      
               clearInterval(myVar);
               WhatsappmainDiv.style.opacity ="1";
               showDashboard();   
}

function sendmessage()
{
	//document.getElementsByClassName("wrapper").style.display = "none";
	var node = document.querySelector('[title="247 Paras"]');
	simulateMouse(node)

	setTimeout(function(){
	var node2 = document.getElementsByClassName('_2S1VP copyable-text selectable-text');
	simulateMouse(node2[0])
	triggerKeyboardEvent(node2[0],0)
	node2[0].innerText = "Testing";
	sendBtn = document.getElementsByClassName('_35EW6');
	//simulateMouse(sendBtn[0])

},1000)


}

function simulateMouse(node)
{
	triggerMouseEvent(node, "mouseover");
	triggerMouseEvent(node, "mousedown");
	triggerMouseEvent(node, "mouseup");
	triggerMouseEvent(node, "click");
}

function simulateKeyboard(node)
{
	

}


function triggerMouseEvent(node, eventType) {
  let clickEvent = document.createEvent('MouseEvents');
  clickEvent.initEvent(eventType, true, true);
  node.dispatchEvent(clickEvent);
}

function triggerKeyboardEvent(el, keyCode){
    var keyboardEvent = document.createEvent("KeyboardEvent");
    
    var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
  
  
    keyboardEvent[initMethod](
                       "keydown",
                        true,      // bubbles oOooOOo0
                        true,      // cancelable
                        window,    // view
                        false,     // ctrlKeyArg
                        false,     // altKeyArg
                        false,     // shiftKeyArg
                        false,     // metaKeyArg
                        keyCode,  
                        0          // charCode
    );
  
    el.dispatchEvent(keyboardEvent); 
}


function showDashboard()
{

	body = document.getElementsByTagName('body');

	headerCode = `
	<style>
		.wrapper{padding:10px;background-color:#fff;position: absolute;width: 100%;height: 100%;z-index: 1000;}
	</style>
	<script>
	
	</script>
	<div class="wrapper">
	<div class="header">

		<table>
			<tr>
				<td>
					<h4>Campaign Manager</h4>
				</td>
				<td>
					<button>+ Group</button><button>+ Contact</button>
				</td>
			</tr>
			<tr>
				<td>

				</td>
			</tr>
			<tr>
				<td><input type="text" placeholder="contact number"></td>
			</tr>
			<tr>
				<td><textarea></textarea></td>
			</tr>
			<tr>
				<td><button id="send" onclick="sendmessage()">Send</button><button>Schedule</button></td>
			</tr>
		</table>
		
	</div>
	</div>`
    body[0].insertAdjacentHTML('beforeend', headerCode);
    document.getElementById('send').addEventListener("click", function(){
  sendmessage()
});
}