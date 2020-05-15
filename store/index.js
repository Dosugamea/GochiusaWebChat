import firebase from '~/plugins/firebase'

export const state = () => ({
  user: {
    uid: '',
    displayName: '',
    photoURL: ''
  }
})

export const mutations = {
  setUser (state, userObj) {
    state.user = userObj
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
      commit('setUser', { uid: result.user.uid, displayName: result.user.displayName, photoURL: result.user.photoURL })
    }).catch(function (error) {
      alert(`ログインエラー: ${error.code}`)
    })
  },
  logout ({ commit }) {
    commit('setUser', { uid: '', displayName: '', photoURL: '' })
  }
}

export const getters = {
  getUserUid (state) {
    return state.user.uid
  },
  getUserName (state) {
    return state.user.displayName
  },
  getUserPhoto (state) {
    return state.user.photoURL
  }
}
