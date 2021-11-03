<template>
  <body class="posts bg-light text-dark">
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <Navbar></Navbar>
    <h1 class="text-center my-5">The Sanctuary</h1>
    <article class="container" id="app">
      <div class="row">
        <div class="col-4">
          <router-link :to="{ name: 'playerDetails' }">
            <div
              v-if="UserData"
              style="position: fixed"
              class="col-3 col-xxl-2 text-dark shadow"
            >
              <img
                :src="UserData.player.profilePic"
                class="rounded img-thumbnail"
                alt="Profil Pic"
              />
              <h2 class="text-center">
                {{ this.$store.state.username.username }}
              </h2>
              <p class="p-2">{{ UserData.player.bio }}</p>
            </div>
          </router-link>
        </div>
        <div class="col-8">
          <div class="">
            <div class="bg-light pe-1 pt-2 rounded row">
              <div class="col-2">
                <img
                  :src="UserData.player.profilePic"
                  class="p-1 col-12 bg-light"
                  alt="Profil Pic"
                />
              </div>
              <div class="col-9">
                <input
                  v-model="newPost.text_content"
                  type="text"
                  class="pe-1 py-2 my-1 col-12 rounded shadow"
                  placeholder="What's on your mind?"
                />
                <!-- <input v-model="newPost.img_content" type='text' placeholder="New Img Content"> -->
                <button @click="postFeed()" class="btn btn-outline-dark my-1">
                  Post
                </button>
              </div>
            </div>
            <ul class="list-group mt-3 row">
              <li
                v-for="post in PostData"
                :key="post.id"
                class="list-group-item"
              >
                <div
                  class="card mb-1 rounded bg-gradient row"
                  style="background-color: #f9f9f9"
                >
                  <div class="card-header" style="display: flex">
                    <div class="col-2">
                      <img :src="post.user.player.profilePic" class="col-12" />
                    </div>

                    <div class="col-10 text-start px-3">
                      <h3 class="card-title">{{ post.user.username }}</h3>
                      <p>{{ formatDate(post.created) }}</p>
                    </div>
                  </div>
                  <div class="card-body text-start">
                    <h5 class="card-text">
                      {{ post.text_content }}<br /><br />
                      <!-- <img v-if="post.img_content" :src="'api/'+post.img_content"> -->
                      <p>{{ post.hashtags }}</p>
                    </h5>
                    <div class="row my-2">
                      <span v-if="post.user.username === UserData.username" class="col-1 d-flex justify-content-center align-items-center"> {{ post.user_likes.length }}</span>
                      <span v-else-if="post.user.username !== UserData.username && post.user_likes.indexOf(UserData.id) != -1"  class="material-icons col-1 d-flex justify-content-center align-items-center"> favorite </span>
                      <span v-else class="material-icons col-1 d-flex justify-content-center align-items-center">
                      <button @click="likePost(post)" class="btn btn-outline-light text-dark fs-4">    
                         favorite_outline 
                      </button>   
                      </span>
                      <input
                        v-model="post.content"
                        class="col-7"
                        type="text"
                        placeholder="Reply"
                      />
                      <!-- <input v-model="replyPost.img_content" type="image"> -->
                      <button
                        @click="replyToPost(post)"
                        class="btn btn-outline-dark col-2"
                      >
                        Reply
                      </button>
                      <button
                        class="btn btn-secondary bg-gradient col-2"
                        type="button"
                        @click="loadReplies(post.id)"
                      >
                        Show Replies
                      </button>
                    </div>
                    <div
                      v-show="post.id === postReplyShow"
                      class="reply rounded shadow"
                    >
                      <div v-for="reply in ReplyData" :key="reply.id">
                        <div class="card-header row my-1">
                          <div class="col-12 text-start">
                            <h3 class="card-title">{{ reply.username }}</h3>
                            <p>{{ formatDate(reply.reply_created) }}</p>
                          </div>
                          <div class="card-body text-start bg-gradient">
                            <h5 class="card-text">
                              {{ reply.text_content }}<br /><br />
                              <!-- <img v-if="post.img_content" :src="'api/'+post.img_content"> -->
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </body>
</template>

<script>
import { getAPI } from "../axios-api";
import Navbar from "../components/Navbar.vue";
import { mapState } from "vuex";

export default {
  name: "Posts",
  data() {
    return {
      replies: [],
      postReplyShow: "",
      newPost: {},
      userData: {},
      replyPost: {},
      isHidden: false,
      replyContent: "",
    };
  },
  components: {
    Navbar,
  },
  computed: mapState(["PostData", "ReplyData", "UserData"]),
  methods: {
    loadFeed() {
      getAPI
        .get("/postdetail/", {
          headers: {
            Authorization: `Bearer ${this.$store.state.accessToken}`,
          },
        })
        .then((response) => {
          console.log(response)
          this.$store.state.PostData = response.data;
        })
        .catch((err) => console.log(err));
    },
    postFeed() {
      let [hashWords, content] = this.splitByHashtag(this.newPost.text_content);
      const bodyParameters = {
        user: this.$store.state.UserData.id,
        text_content: content,
        //img_content: this.newPost.img_content,
        hashtags: hashWords,
      };
      const config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
      };
      getAPI
        .post("/post/", bodyParameters, config)
        .then(() => this.loadFeed())
        .then((this.newPost.text_content = ""));
    },
    replyToPost(post) {
      const bodyParameters = {
        user: this.$store.state.UserData.id,
        text_content: post.content,
        post_id: post.id,
      };
      const config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
      };
      getAPI
        .post("/replyadd/", bodyParameters, config)
        .then(() => this.loadReplies(post.id))
        .then(() => (post.content = ""));
    },
    loadReplies(post) {
      (this.postReplyShow = post),
        getAPI
          .get("/reply/", {
            headers: {
              Authorization: `Bearer ${this.$store.state.accessToken}`,
            },
            params: { post_id: post },
          })
          .then((response) => {
            this.$store.state.ReplyData = response.data;
          });
    },
    likePost(post) {
      let bodyParameters = new FormData();
      bodyParameters.append("user_likes", this.$store.state.UserData.id);
      getAPI
        .patch("/postlike/" + post.id, bodyParameters, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${this.$store.state.accessToken}`,
          },
        })
        .then(() => this.$router.go())
    },
    getUser() {
      getAPI
        .get("/player/", {
          headers: {
            Authorization: `Bearer ${this.$store.state.accessToken}`,
          },
          params: { username: this.$store.state.username.username },
        })
        .then((response) => {
          // console.log(response);
          this.$store.state.UserData = response.data[0];
        });
    },
    splitByHashtag(stringToSplit) {
      let hashWords = stringToSplit.match(/#(\w+)/g);
      if (hashWords) {
        hashWords = hashWords.join(" ");
      } else {
        hashWords = "";
      }
      let content = stringToSplit.split("#")[0];
      return [hashWords, content];
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      return new Intl.DateTimeFormat("default", options).format(date);
    },
  },
  created() {
    this.getUser(), this.loadFeed();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Zen+Antique+Soft&family=Zen+Maru+Gothic&display=swap");
h1 {
  font-family: "Zen Antique Soft", serif;
}
.reply > div > div {
  background: #ededed;
}
</style>