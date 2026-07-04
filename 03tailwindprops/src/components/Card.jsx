import React from 'react'

export default function Card7({userName="Raj"}) {
  console.log(userName);
  return (
    <div className="w-60 h-60 rounded-xl">
      <img
        src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
        alt="Giphy"
        className="rounded-t-xl"
      />
      <div className="py-4 px-5 relative -top-[3.4rem] rounded-b-xl z-10 bg-white/30 backdrop-blur-md border border-white/20">
        <h1 className="font-bold  font-mono  text-xl">{userName}</h1>
      </div>
    </div>
  )
}
