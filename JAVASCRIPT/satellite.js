var images = document.getElementsByClassName("a")
for (i = 0; i < images.length; i++)
{
    images[i].setAttribute("src","../ASSET/Images/Satellite/"+i+".jpg");
    images[i].style.width="220px"
    images[i].style.height="220px"
}
console.log(images)
//this is for header
var indval=0;
var imgarr=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"]
        function inc()
        {
            indval++;
            if(indval>=imgarr.length)
            {
                indval=0;
            document.getElementById("header").style.backgroundImage="url(../ASSET/Images/Satellite/"+imgarr[indval]+")";
            }
            else
            {
                document.getElementById("header").style.backgroundImage="url(../ASSET/Images/Satellite/"+imgarr[indval]+")";
            }
        }
        function dec()
        {
            indval--;
            if(indval<0)
            {
                indval=7;
            document.getElementById("header").style.backgroundImage="url(../ASSET/Images/Satellite/"+imgarr[indval]+")";
            }
            else
            {
                document.getElementById("header").style.backgroundImage="url(../ASSET/Images/Satellite/"+imgarr[indval]+")";
            }
        }
        function openImg(pic,name,info)
        {
            document.getElementById("subWindow").removeAttribute("style")
            document.getElementById("subWindowImage").src='../ASSET/Images/Satellite/'+pic+".jpg"
            document.getElementById("imageHeading").innerHTML=name;
            document.getElementById("imgpara").innerHTML=info;
        }
        function closeImg()
        {
            document.getElementById("subWindow").setAttribute("style","display:none")
        }
