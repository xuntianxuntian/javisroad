import { useEffect } from 'react'
import { themeChange } from 'theme-change'


function App() {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
    <>
      <div className='m-4 flex flex-col-3 gap-6'>
        <button className="btn btn-outline" data-set-theme="light">
          light
        </button >
        <button className="btn btn-outline" data-set-theme="dracula">
          dracula
        </button >
        <button className="btn btn-outline" data-set-theme="garden">
          garden
        </button >
      </div>
      <div className='m-4'>
        <button className="btn btn-info">
          Info
        </button >
        <button className="btn btn-error" >
          Error
        </button >
        <button className="btn btn-success" >
          Sucess
        </button >
        <button className="btn btn-disabled">
          Disable
        </button >
      </div>

    </>
  )
}

export default App
