import React from "react"
import LetterLoading from "letterloading";

class Typing extends React.Component{
    
    componentDidMount(){
        const options ={
            strings: ["YOU, yes YOU","MUM ","Terri Burns, ","travel", "anything related to rihanna",
            "JAYZ more", "reading","SORRY, love GOD",
            "ramen", "Ibadan", " two HAUSA girls", "seeing small jokes", "not tweeting", "BEING me", "wine ^(* ! *)^",
            "to-do lists", "public speaking", "lorde _//\\_", "nike shoes", "interior design", "dates", "the internet","the WEB",
            "Havard Business School",
            "Wharton Business School", " INSEAD", "chicago","chicago boothe", "side hustles", "doing vs talking", "my bed",
            "Game of Thrones", "weekends", "restaurants", "FOOD :(", "black twitter", "iphones,but never used one", "crop tops", "writing",
            "looking funny", "and may be dump", "figure 8", "house plants", "mornings",
            "sunshine, ","indoor", " kids", "like the POOR", "the humble",
            "being loved"],
            loadspeed: 2,
            randomizeEl: false,
            char: "",
          };
          this.letterload = new LetterLoading(this.el, options);
    }

    componentWillUnmount(){
        this.letterload.destroy();
    }
    render(){
        return(
            <span ref={(el) => { this.el = el; }}/>
        )
    }
}

export default Typing;
