import { Play } from 'phosphor-react'

export function Home() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task"></input>

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount"></input>

          <span>minutos.</span>
        </div>

        <div>
          <span>0</span>
          <span>0</span>

          <span>:</span>

          <span>0</span>
          <span>0</span>
        </div>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </div>
  )
}
