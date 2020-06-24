import React from "react"
import Typed from 'typed.js';

// var options = {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 40
// };


class Typing extends React.Component{
    componentDidMount(){
        const options ={
            strings: ["YOU, yes <em style='color: violet;font-size: 1.4em'>YOU<em>","my <b style='color: #345678'>MUM</b> ","<b style='color: #505060'>Terri Burns</b>, ","travel", "anything related to rihanna",
            "<em style='color: violet'>JAYZ more</em>", "reading","SORRY, love <em style='color: yellow'>GOD</em>",
            "ramen", "Ibadan", "d one HAUSA girl", "seeing small jokes", "<b style='color:green'>not tweeting</b>", "BEING me", "wine ^(* ! *)^",
            "to-do lists", "public speaking", "lorde _//\\_", "nike shoes", "interior design", "dates", "the internet","the WEB","Havard Business School",
            "Wharton Business School", "and INSEAD", "chicago", "side hustles", "doing vs talking", "my MUM than anyone", "my bed",
            "Game of Thrones", "weekends", "restaurants", "FOOD :(", "black twitter", "iphones, ::BUT never used one", "crop tops", "writing",
            "looking funny and may be dump", "figure 8", "house plants", "mornings",
            "sunshine, amhin who doesn't like sunshine","been indoor", "playing with kids", "like the POOR", "the humble",
            "<b style='color: yellow'>being loved</b>"],
          typeSpeed: 60,
          backSpeed: 50,
          showCursor: true,
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
