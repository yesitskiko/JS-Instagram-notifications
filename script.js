function delay(a){return new Promise(b=>{setTimeout(()=>{b(2)},a)})}function notify(a,b,c=null){function e(){setTimeout(async function(){d.attr("class","center slide-out-blurred-bottom"),await delay(400),d.remove()},0)}let d=$(`
<div class="center slide-in-blurred-top" style="height: 100px; margin-top: 20px; border-radius: 10px; width: 90%; background-color: #222222;">
    <div class="center" style="height: 30px; margin-top: 20px; border-top-left-radius: 10px; border-top-right-radius: 10px; width: 100%; background-color: #000000;">
        <h4 style="color: whitesmoke; position: relative; top: 7px; text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: lighter;">${a}</h4>
    </div>
    <h4 style="color: whitesmoke; margin-top: 15px; font-family: Arial, Helvetica, sans-serif; text-align: center; font-weight: lighter; font-size: 15px;">${b}</h4>
</div>    
`).appendTo($("#notificationHolder"));d.on("click",async function(){await e()}),null!=c&&setTimeout(async function(){await delay(1e3*c),e()},0)}console.log("JS-instagram-notifications | loaded")
