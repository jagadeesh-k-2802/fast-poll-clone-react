import axios from 'axios';

class API {
  constructor() {
    if (API._instance) {
      return API._instance;
    }

    API._instance = this;
  }

  async login(data) {
    return await axios.post('/api/auth/login', data);
  }

  async signup(data) {
    return await axios.post('/api/auth/signup', data);
  }

  async getCurrentUser(data) {
    return await axios.get('/api/auth/me');
  }

  async sendContactFeedback(data) {
    return await axios.post('/api/contact', data);
  }

  async requestPasswordReset(data) {
    return await axios.post('/api/auth/forgot-password', data);
  }

  async updateUserDetails(data) {
    return await axios.patch('/api/auth/update-details', data);
  }

  async updateUserPassword(data) {
    return await axios.patch('/api/auth/update-password', data);
  }

  async updateAvatar(data) {
    return await axios.patch('/api/auth/update-avatar', data);
  }

  async resetPassword(data, token) {
    return await axios.post(`/api/auth/reset-password/${token}`, data);
  }

  async requestDelete() {
    return await axios.get('/api/auth/request-delete');
  }

  async deleteAccountPermanently(token) {
    return await axios.delete(`/api/auth/delete-account/${token}`);
  }

  async logout() {
    return await axios.get('/api/auth/logout');
  }

  async createPoll(data) {
    return await axios.post('/api/polls', data);
  }

  async fetchDashboardData() {
    const { data } = await axios.get('/api/dashboard');
    return data;
  }

  async fetchProfile(username) {
    const { data } = await axios.get(`/api/profile/${username}`);
    return data;
  }

  async fetchMyPolls(page, sort) {
    const query = `page=${page}&sort=${sort}`;
    const { data } = await axios.get(`/api/polls/?${query}`);
    return data;
  }

  async fetchPrivatePoll(id) {
    const { data } = await axios.get(`/api/polls/${id}`);
    return data;
  }

  async fetchPublicPollsFromUser(username, page, sort) {
    const query = `page=${page}&sort=${sort}`;
    const { data } = await axios.get(`/api/polls/user/${username}?${query}`);
    return data;
  }

  async fetchPublicPolls(page, sort) {
    const query = `page=${page}&sort=${sort}`;
    const { data } = await axios.get(`/api/polls/public?${query}`);
    return data;
  }

  async fetchPublicPoll(id) {
    const { data } = await axios.get(`/api/polls/public/${id}`);
    return data;
  }

  async fetchMyVotes(page) {
    const query = `page=${page}`;
    const { data } = await axios.get(`/api/votes?${query}`);
    return data;
  }

  async fetchPollWithVotes(id) {
    const { data } = await axios.get(`/api/votes/poll/${id}`);
    return data;
  }

  async patchPoll(id, data) {
    const { data: result } = await axios.patch(`/api/polls/${id}`, data);
    return result;
  }

  async reportPoll(data) {
    return await axios.post('/api/polls/report', data);
  }

  async editPoll(id, data) {
    return await axios.put(`/api/polls/${id}`, data);
  }

  async makeVote(data) {
    return await axios.post('/api/votes', data);
  }

  async fetchCommentsFromPoll(pollId, page, limit = 5) {
    const query = `page=${page}&limit=${limit}`;
    const { data } = await axios.get(`/api/comments/poll/${pollId}?${query}`);
    return data;
  }

  async postComment(data) {
    const { data: result } = await axios.post('/api/comments', data);
    return result;
  }

  async reportComment(data) {
    return await axios.post('/api/comments/report', data);
  }
}

export default new API();
