// Helloはクリックするとアラートを出すテキストを返す
const Hello = () => {
    const onClick = () => {
        alert('Hello')
    }
    const text = 'Hello, React'

    // テキストを子にもつdiv要素を返す
    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

// 外部からHelloを読み込めるようにexportする
export default Hello