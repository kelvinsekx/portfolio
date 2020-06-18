import React from "react"
import $ from "jquery"
import "../js/typed"

class Typing extends React.Component{
    componentDidMount(){
        this.$el = $(this.el)
        this.$el.typed({
            strings: ["my MUM so much, but she doesn't know ","Terri Burns, she gave me the jquery snippets","travel", "anything related to rihanna", "JAYZ more", "reading","SORRY, love GOD", "ramen", "Ibadan", "d one HAUSA girl", "seeing small jokes", "not tweeting", "BEING me", "wine ^(* ! *)^", "to-do lists", "public speaking", "lorde _//\\_", "nike shoes", "interior design", "dinner parties", "the internet","the WEB","Havard Business School, Wharton and INSEAD", "chicago", "side hustles", "doing vs talking", "my MUM than anyone", "my bed", "Game of Thrones", "weekends", "restaurants", "FOOD :(", "black twitter", "iphones, iphones, iphones ::BUT never used one", "crop tops", "writing", "looking funny and may be dump", "figure 8", "house plants", "mornings", "sunshine, amhin who doesn't like sunshine","been indoor", "6, yes 6 girls all my LIFE", "playing with kids", "like the POOR", "the humble", "being loved"],
          typeSpeed: 0,
          showCursor: false,
          loop: true,
          loopCount: false,
          backDelay: 1000,
          });
    }

    componentWillUnmount(){
        // this.$el
    }
    render(){
        return(
            <span ref={el => this.el = el}/>
        )
    }
}

export default Typing;