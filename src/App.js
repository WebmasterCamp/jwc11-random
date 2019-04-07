import React, {useCallback, useEffect, useState} from 'react'
import './App.scss'
import sound from './Epic Unease.mp3'
import thunderEffect from './thunder-effect.mp3'

const random = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1)) + start
}

function useKeyboardEvent(code, callback) {
  useEffect(() => {
    const handler = function(event) {
      if (event.code === code) {
        callback()
      }
    }
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [])
}

const useGlobal = (name, callback) => {
  window[name] = callback
}

const duration = {
  1: 24,
  2: 28,
  3: 32,
  4: 20,
  5: 30,
  6: 29
}

const groupNames = {
  1: 'ก',
  2: 'ข',
  3: 'ค',
  4: 'ง',
  5: 'จ',
  6: 'ฉ'
}

const getLocalStorage = key => {
  try {
    const data = localStorage.getItem(key)
    return JSON.parse(data)
  } catch (err) {
    return null
  }
}

const audio = new Audio(sound)
window.audio = audio

const thunderAudio = new Audio(thunderEffect)
window.thunderAudio = thunderAudio

const playEffect = () => {
  thunderAudio.currentTime = 0.5
  thunderAudio.play()
}

// const pauseEffect = () => thunderAudio.pause()

const playSound = () => {
  audio.currentTime = 1
  audio.play()
}

const pauseSound = () => audio.pause()

const setLocalStorage = (key, value) => {
  const data = JSON.stringify(value)
  localStorage.setItem(key, data)
}

const allTeams = getLocalStorage('_teams') || [1, 2, 3, 4, 5, 6]

const lastTimeDurationAnimate = 15

const CoinRandom = () => {
  const [selectedTeam, setSelectedTeam] = useState(0)
  const [groupName, setGroupName] = useState('')
  const [teams, setTeams] = useState(allTeams)
  const [showTeamLabel, setShowTeamLabel] = useState(false)
  const [isLastTeam, setIsLastTeam] = useState(false)

  const showLabelFor = useCallback((index, fixedTime) => {
    const teamNumber = teams[index]
    if (teamNumber) {
      setTimeout(() => {
        setGroupName(groupNames[teamNumber])
      }, 5000)

      let timeout = fixedTime ? fixedTime : duration[teamNumber] * 1000
      console.log(fixedTime)
      console.log(timeout)
      setTimeout(() => {
        setShowTeamLabel(true)
        pauseSound()
        playEffect()
      }, timeout)
    }
  })

  const animateCoin = useCallback(() => {
    setShowTeamLabel(false)
    if (teams.length !== 0) playSound()

    const teamIndex = random(0, teams.length - 1)
    console.log('length', teams.length)
    if (teams.length === 1) {
      setIsLastTeam(true)
      showLabelFor(teamIndex, lastTimeDurationAnimate * 1000)
    } else {
      showLabelFor(teamIndex)
    }
    setSelectedTeam(teams[teamIndex])
    setSelectedTeam(teams[teamIndex])

    teams.splice(teamIndex, 1)
    setLocalStorage('_teams', teams)
  }, [teams, isLastTeam])

  useGlobal('setTeams', setTeams)
  useGlobal('teams', teams)
  useGlobal('selectedTeam', selectedTeam)
  useGlobal('animateCoin', animateCoin)

  useKeyboardEvent('Space', animateCoin)
  useKeyboardEvent('KeyS', animateCoin)

  return (
    <div id="App">
      <img src="./coin.png" alt="" className={`coin${selectedTeam} start`} style={isLastTeam ? { animationDuration: `${lastTimeDurationAnimate}s` } : {}} />
      <div className={`show-team ${showTeamLabel && 'show'}`}>
        <span className="background-board">
          สำนัก {groupName || 'ฮ'} ถูกเลือก
        </span>
      </div>

      <img className="bg" src="./RANDOM.png" alt="" />
    </div>
  )
}

export default CoinRandom
