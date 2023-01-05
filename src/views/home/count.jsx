import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const lis = ['aaa', 'bbb', 'ccc']
    const count = ref(0)

    const counter = () => {
      count.value += 1
    }

    return () => (<div>
      {lis.map(i => <li>{i}</li>)}
      <h3>计数：{count.value}</h3>
      <button onClick={counter}>点击+1</button>
    </div>)
  }
}) 