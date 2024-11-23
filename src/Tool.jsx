function Tool({ path, nameOfTool }) {
    return (
        <div className="outerDivForTool">
            <button className="toolsCircle">
                <svg height="24" width="21" viewBox="0 0 576 512"><path d={path} /></svg>
            </button>
            <p>{nameOfTool}</p>
        </div>
    )
}
export default Tool;