function ToolBar() {
    return (
        <div style={{'borderTop':'1px solid rgba(26, 26, 26, 0.87)', 'padding':'8px 16px', 'borderBottom':'1px solid rgba(26, 26, 26, 0.87)'}}>
            <p style={{'fontSize':'1.5rem', 'marginBottom':'14px', 'marginTop':'0px'}}>Tools</p>
            <div style={{'display':'flex', 'gap':'16px'}}>
                <div className="outerDivForTool">
                    <button className="toolsCircle">
                    <svg xmlns="http://www.w3.org/2000/svg"  height="24" width="21" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
                    </button>
                    <p>Filter</p>
                </div>
                <div className="outerDivForTool">
                    <button className="toolsCircle">
                    <svg xmlns="http://www.w3.org/2000/svg"  height="24" width="21" viewBox="0 0 448 512"><path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/></svg>
                    </button>
                    <p>Graph</p>
                </div>
                <div className="outerDivForTool">
                    <button className="toolsCircle">
                        <svg xmlns="http://www.w3.org/2000/svg"  height="24" width="21" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </button>
                    <p>Search</p>   
                </div>
                <div className="outerDivForTool">
                    <button className="toolsCircle">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
                    </button>
                    <p>Notification</p>
                </div>
            </div>
        </div>
    )
}
export default ToolBar;