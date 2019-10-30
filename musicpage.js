var musicpromise = d3.json ("https://deezerdevs-deezer.p.rapidapi.com/search?q=led%20zeppelin", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "c123de1447msh95ba0341d524584p15de3cjsn57eea2ac5be5"
	}
})
                           

                           
musicpromise.then(
    
     
    
    function(data)
    {
    getalbumnames (data)
    console.log(data);
    },
    
    function(err)
    {
        console.log(err);
    },
  
                      
)

var getalbumnames = function (nms)
{
    d3.select ("#list")
    .selectAll("ul")
    .data(nms)
    .enter()
    .append("li")
    .text(function(d)
         {
        return d.data.title
    })
    
}