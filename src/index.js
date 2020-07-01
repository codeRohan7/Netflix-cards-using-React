// props


import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

import Cards from './Cards'
import Sdata from './Sdata'

// import Add, {Sub,Mul,Div} from './Challange5'

const CssStyle= {};
let curDate =new Date();
curDate =curDate.getHours(); 
let greeting = '';
if(curDate >=1 && curDate < 12){
  greeting = "GOOD MORNING"
  CssStyle.color ='Orange';

}else if(curDate >=12 && curDate < 16)
{
  greeting ="GOOD AFTERNOON"
  CssStyle.color ='Yellow';
}
else if(curDate >=16 && curDate < 19)
{
  greeting ="GOOD EVENING"
  CssStyle.color ='white';
}
else {
  greeting="Good Night"
  CssStyle.color ='white';

}



ReactDom.render(<><h1>BEST NETFLIX SERIES OF 2020</h1>
  <h1> Hello Sir, <span style={CssStyle}>{greeting}</span> </h1>
 <Cards 
 img={Sdata[0].img}
 title= {Sdata[0].title}
 category={Sdata[0].category}
 link={Sdata[0].link} />
 <Cards 
 img={Sdata[1].img}
 title= {Sdata[1].title}
 category={Sdata[1].category}
 link={Sdata[1].link} />
 <Cards 
 img={Sdata[2].img}
 title= {Sdata[2].title}
 category={Sdata[2].category}
 link={Sdata[2].link} />
 <Cards 
 img={Sdata[0].img}
 title= {Sdata[0].title}
 category={Sdata[0].category}
 link={Sdata[0].link} />
 <Cards 
 img={Sdata[1].img}
 title= {Sdata[1].title}
 category={Sdata[1].category}
 link={Sdata[1].link} />
 <Cards 
 img={Sdata[2].img}
 title= {Sdata[2].title}
 category={Sdata[2].category}
 link={Sdata[2].link} />
 
  </>

,document.getElementById("root")
);