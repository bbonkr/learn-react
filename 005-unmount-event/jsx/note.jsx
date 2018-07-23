class Note extends React.Component{
    constructor(props){
        super(props)
    }
    confirmLeave(e){
        let confirmationMessage = '창을 닫으시겠습니까?';
        e.returnValue = confirmationMessage; /* Gecko, Treident, Chrome 34+ */
        return confirmationMessage; /* Gecko, WebKit, Chrome < 34 */
    }
    componentDidMount(){
        console.log('beforeunload 이벤트에 confirmLeave 이벤트 리스너 등록')
        window.addEventListener('beforeunload', this.confirmLeave)
    }
    componentWillUnmount(){
        console.log('beforeunload 이벤트에 confirmLeave 이벤트 리스너 제거')
        window.removeEventListener('beforeunload', this.confirmLeave)
    }
    render(){
        console.log('render')
        return (
            <div>
                <p>부모 컴포넌트는 {this.props.secondsLeft}초 뒤에 제거됩니다.</p>
                <input type="text" />
            </div>
        )
    }
}