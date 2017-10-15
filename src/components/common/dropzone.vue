<template>
  <div>
    <div class="dropzone dropzone-previews">
      <div class="dropzone-space" ref="imagezone">
        <div class="dz-message">
          <i class="fa fa-plus" aria-hidden="true"></i>
          <span>Drop files here or click to upload.</span>
        </div>
      </div>

      <!-- Hidden template for dropzone preview -->
      <div ref="template" class="hidden">
        <div class="dz-preview dz-file-preview">
          <div class="dz-details">
            <img data-dz-thumbnail />
            <div class="dz-descr">
              <div class="dz-filename"><span data-dz-name></span></div>
              <div class="dz-size" data-dz-size></div>
              <div class="dz-remove" data-dz-remove>
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
          <div class="dz-error" data-dz-errormessage></div>
        </div>
      </div>
    </div>
    <div v-if="preloader">Загрузка изображения...</div>
  </div>
</template>

<script>
import Dropzone from 'dropzone'

export default {
  name: 'drop-zone',

  props: {
    value: {
      type: String,
      required: true
    }
  },

  data: () => ({
    preloader: false
  }),

  mounted () {
    this.initDropzone()
  },

  methods: {
    initDropzone () {
      Dropzone.autoDiscover = false
      /* eslint-disable no-new */
      new Dropzone(this.$refs.imagezone, {
        url: 'https://api.imgur.com/3/image',
        paramName: 'image',
        method: 'post',
        headers: {
          'Cache-Control': null,
          'X-Requested-With': null,
          'Authorization': 'Client-ID f5ef23b782d3338'
        },
        maxFiles: 1,
        maxFilesize: 100,
        acceptedFiles: 'image/*',
        clickable: true,
        previewsContainer: '.dropzone',
        previewTemplate: this.$refs.template.innerHTML,
        thumbnailWidth: 50,
        thumbnailHeight: 50,
        // maxfilesexceeded: function (file) {
        //   this.removeAllFiles()
        //   this.addFile(file)
        // },
        sending: (event) => {
          this.preloader = true
        },
        success: (file, res) => {
          this.$emit('input', res.data.link)
          this.preloader = false
        }
      })
    }
  }
}
</script>

<style scoped>

.dropzone {
  max-width: 350px;
  margin: 30px 0 10px;
}

.dropzone-space {
  border: 2px dashed #0087F7;
  background-color: #f5f5f5;
  text-align: center;
  cursor: pointer;
}

.dz-message {
  color: #646c7f;
  padding: 15px 10px;
}

.dz-message i {
  font-size: 20px;
  margin: 0 10px 0 0;
  vertical-align: top;
}

.dz-message span {
  font-size: 16px;
  line-height: 20px;
  vertical-align: top;
}

.dz-preview {
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  text-align: center;
  text-align: left;
}

.dz-details {
  width: 100%;
  overflow: hidden;
  padding: 10px;
}

.dz-details img,
.dz-details .dz-descr {
  float: left;
}

.dz-details .dz-descr {
  width: calc(100% - 50px);
  padding: 10px 0 0 10px;
  position: relative;
}

.dz-filename {
  color: #0087F7;
  font-size: 14px;
  line-height: normal;
}

.dz-filename span {
  max-width: calc(100% - 20px);
  overflow: hidden;
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;
}

.dz-size {
  font-size: 10px;
  line-height: normal;
  color: #646c7f;
}

.dz-remove {
  position: absolute;
  right: 0;
  top: 0;
  color: #646c7f;
  cursor: pointer;
  font-size: 16px;
}

.dz-progress {
  height: 2px;
  width: 100%;
  background-color: #fff;
}

.dz-upload {
  height: 100%;
  background-color: #0087F7;
  display: block;
}

.dz-preview .dz-error {
  color: #EF5350;
  padding: 0 5px;
  line-height: 25px;
}

.hidden {
  display: none;
}
</style>
