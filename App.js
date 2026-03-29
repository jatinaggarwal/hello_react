    /**
     * 
     * How to create a below srtructure in React
     * <div id="parent">
     *   <div id="child">   
     *       <h1>I am hi tag</h1>
     *   </div>   
     * </div>
     */
    

    
    
    
    
    const heading =React.createElement('h1', {id:"heading"}, 'Hello World from React from diff file');
    console.log(heading);
    
    const root = ReactDOM.createRoot(document.getElementById('helloWorld'));
    // root.render(heading);

    const parent = React.createElement(
        "div",
        {id:"parent"},
        React.createElement(
            "div",
            {id:"child"},
            React.createElement(
                "h1",
                {},
                "I am hi tag"
            )
        )
    )

    root.render(parent);