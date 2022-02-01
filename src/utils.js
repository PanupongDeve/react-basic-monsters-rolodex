

export const handleSetState = (setState, stateName, event) => {
    setState({
        [stateName]: event.target.value
    })
}