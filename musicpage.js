//2c7gFThUYyo2t6ogAglYNw
//2FXC3k01G6Gw61bmprjgqS

var musicpromise = d3.json("musicpage.json");

musicpromise.then (
    
    function(data)
    {
    console.log("works",data);
    }
    function(err)
    {
        console.log("nope", err)
    }
                      
)