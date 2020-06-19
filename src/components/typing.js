import React from "react"
import Typed from 'typed.js';

// var options = {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 40
// };

 
class Typing extends React.Component{
    componentDidMount(){
        const options ={
            strings: ["my <b style='color: #345678'>MUM</b> so much, but she doesn't know ","<b style='color: #505060'>Terri Burns</b>, she gave me the jquery snippets","travel", "anything related to rihanna", "<em style='color: violet'>JAYZ more</em>", "reading","SORRY, love <em style='color: yellow'>GOD</em>", "ramen", "Ibadan", "d one HAUSA girl", "seeing small jokes", "<b style='color:green'>not tweeting</b>", "BEING me", "wine ^(* ! *)^", "to-do lists", "public speaking", "lorde _//\\_", "nike shoes", "interior design", "dinner parties", "the internet","the WEB","Havard Business School", "Wharton Business School", "and INSEAD", "chicago", "side hustles", "doing vs talking", "my MUM than anyone", "my bed", "Game of Thrones", "weekends", "restaurants", "FOOD :(", "black twitter", "iphones, iphones, iphones ::BUT never used one", "crop tops", "writing", "looking funny and may be dump", "figure 8", "house plants", "mornings", "sunshine, amhin who doesn't like sunshine","been indoor", "6, yes 6 girls all my LIFE", "playing with kids", "like the POOR", "the humble", "<b style='color: yellow'>being loved</b>"],
          typeSpeed: 60,
          backSpeed: 50,
          showCursor: false,
          loop: true,
          loopCount: false,
          backDelay: 1000,
          };
          this.typed = new Typed(this.el, options);
    }

    componentWillUnmount(){
        this.typed.destroy();
    }
    render(){
        return(
            <span ref={(el) => { this.el = el; }}/>
        )
    }
}

export default Typing;