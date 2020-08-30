import React from "react"
import Typed from 'typed.js';


class Typing extends React.Component{
    componentDidMount(){
        const options ={
            strings: ["YOU, yes <em style='color: violet;font-size: 1.4em'>YOU<em>","my <b style='color: #345678'>MUM</b> ","<b style='color: #505060'>Terri Burns</b>, ","travel", "<em style='font-size: 0.7em'>anything related to rihanna</em>",
            "<em style='color: violet'>JAYZ more</em>", "reading","SORRY, love <em style='color: yellow'>GOD</em>",
            "ramen", "Ibadan", "d one HAUSA girl", "seeing small jokes", "<b style='color:green'>not tweeting</b>", "BEING me", "wine ^(* ! *)^",
            "to-do lists", "public speaking", "lorde _//\\_", "nike shoes", "interior design", "dates", "the internet","the WEB",
            "<em style='font-size: 0.7em'>Havard Business School</em>",
            "<em style='font-size: 0.7em'>Wharton Business School</em>", "and INSEAD", "chicago","chicago boothe", "side hustles", "doing vs talking", "my bed",
            "Game of Thrones", "weekends", "restaurants", "FOOD :(", "black twitter", "<em style='font-size: 0.6em'>iphones,but never used one</em>", "crop tops", "writing",
            "looking funny", "and may be dump", "figure 8", "house plants", "mornings",
            "sunshine, ","been indoor", "playing with kids", "like the POOR", "the humble",
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
