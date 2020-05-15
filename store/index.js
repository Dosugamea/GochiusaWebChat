import firebase from '~/plugins/firebase'

export const state = () => ({
  userUid: '',
  userName: ''
})

export const mutations = {
  setUserUid (state, userUid) {
    state.userUid = userUid
  },
  setUserName (state, userName) {
    state.userName = userName
  }
}

export const actions = {
  login ({ commit }, { loginMethod }) {
    let provider = null
    if (loginMethod === 'google') {
      provider = new firebase.auth.GoogleAuthProvider()
    } else {
      provider = new firebase.auth.GithubAuthProvider()
    }
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const user = result.user
      commit('setUserUid', user.uid)
      commit('setUserName', user.displayName)
    }).catch(function (error) {
      alert(`ログインエラー: ${error.code}`)
    })
  }
}

export const getters = {
  getUserUid (state) {
    return state.userUid
  },
  getUserName (state) {
    return state.userName
  }
}
