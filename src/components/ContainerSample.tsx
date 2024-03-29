import React from "react";

// Containerのpropsの型を定義
type ContainerProps = {
    title: string
    children: React.ReactNode
}

// Containerは赤背景のボックスの中にタイトルと子要素を表示
const Container = (props: ContainerProps): JSX.Element => {
    const { title, children } = props

    return (
        <div style={{ background: 'red'}}>
            <span>{title}</span>
            {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示 */}
            <div>{children}</div>
        </div>
    )
}

const Parent = () => {
    return (
        <Container title="Hello">
            <p>ここの部分が背景色で囲まれます</p>
        </Container>
    )
}

export default Parent