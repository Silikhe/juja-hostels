import React from 'react'


var style = {
    backgroundColor: "#000000",
    textAlign: "center",
    padding: "20px",
    left: "0",
    bottom: "0",
    height: "60px",
    color: "#ffffff",
    width: "100%",
}




export default function Footer() {
    return (
            <div style={style}>
                <p className="footer">
                    Created by
                    <a href="https://silsilas.github.io/portf/"> <i>Silikhe </i></a>
                     copyright &copy; 2020
                    </p>
            </div>
    )
}
