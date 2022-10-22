<template>
    <Navbar />
    <section class="w-full h-screen bg-primary px-6 md:px-[85px] py-[50px]">
        <div class="bg-white w-full md:w-[600px] flex flex-col py-12 px-8 md:px-16 gap-2 rounded-xl shadow-md" v-show="registerCard == 1">
            <p class="text-start">Kami harap harimu menyenangkan!</p>
            <h2 class="text-start text-[56px] text-black font-bold mb-2">Sign Up</h2>
            <div class="mb-2">
                <div class="input-group flex flex-col text-start text-black text-sm font-light gap-2">
                    <label for="nama">Nama Lengkap</label>
                    <input type="text" name="nama" id="nama" placeholder="Fawwas Gaming" class="bg-[#FFF7DE] py-3 px-5 rounded-sm text-black placeholder:text-gray-400" v-model="user.name">
                </div>
                <p v-show="error.name" class="text-red-600 text-xs text-end mt-1">{{ error.name }}</p>
            </div>
            <div>
                <div class="input-group flex flex-col text-start text-black text-sm font-light gap-2 mb-2">
                    <label for="nim">Nomor Induk Mahasiswa</label>
                    <input type="text" name="nim" id="nim" placeholder="192410103069" class="bg-[#FFF7DE] py-3 px-5 rounded-sm text-black placeholder:text-gray-400" v-model="user.nim">
                </div>
                <p v-show="error.nim" class="text-red-600 text-xs text-end mt-1">{{ error.nim }}</p>
            </div>
            <div class="flex justify-center mt-6">
                <button class="bg-primary text-white py-2 px-6 flex items-center gap-3" @click="next()" style="border-radius: 40px">
                    <p>NEXT</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3.56224 13.4062H17.7466L14.3646 9.11719C14.2685 8.99531 14.3552 8.8125 14.5122 8.8125H16.031C16.2607 8.8125 16.4787 8.91797 16.6193 9.09844L20.463 13.9734C20.8497 14.4656 20.5005 15.1875 19.8747 15.1875H3.56224C3.45912 15.1875 3.37474 15.1031 3.37474 15V13.5938C3.37474 13.4906 3.45912 13.4062 3.56224 13.4062Z" fill="white"/>
                    </svg>
                </button>
            </div>
            <div class="flex gap-2 justify-center mt-4">
                <p>Sudah punya akun?</p>
                <router-link to="/login"><p class="text-primary font-medium">Sign In</p></router-link>
            </div>
        </div>
        <div class="bg-white w-full md:w-[600px] flex flex-col py-12 px-8 md:px-16 gap-2 rounded-xl shadow-md" v-show="registerCard == 2">
            <div class="flex gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" @click="back()" width="28" height="28" viewBox="0 0 24 24" fill="none" style="transform: scaleX(-1);">
                    <path d="M3.56224 13.4062H17.7466L14.3646 9.11719C14.2685 8.99531 14.3552 8.8125 14.5122 8.8125H16.031C16.2607 8.8125 16.4787 8.91797 16.6193 9.09844L20.463 13.9734C20.8497 14.4656 20.5005 15.1875 19.8747 15.1875H3.56224C3.45912 15.1875 3.37474 15.1031 3.37474 15V13.5938C3.37474 13.4906 3.45912 13.4062 3.56224 13.4062Z" fill="black"/>
                </svg>
                <h3 class="text-start text-[32px] text-black font-bold mb-2">Sign Up</h3>
            </div>
            <div class="mb-2">
                <div class="input-group flex flex-col text-start text-black text-sm font-light gap-2">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="test1@gmail.com" class="bg-[#FFF7DE] py-3 px-5 rounded-sm text-black placeholder:text-gray-400" v-model="user.email">
                </div>
                <p v-show="error.email" class="text-red-600 text-xs text-end mt-1">{{ error.email }}</p>
            </div>
            <div class="mb-2">
                <div class="input-group flex flex-col text-start text-black text-sm font-light gap-2 mb-2">
                    <label for="password">Password</label>
                    <div class="bg-[#FFF7DE] py-3 px-5 rounded-sm focus-within:border-[2.5px] border-black flex justify-between">
                        <input :type="[showPass ? 'text' : 'password']" name="password" id="password" placeholder="password123" class="bg-[#FFF7DE] text-black outline-none placeholder:text-gray-400 w-5/6" v-model="user.password">
                        <svg v-if="showPass" @click="showPass = false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye cursor-pointer" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                        <svg v-if="!showPass" @click="showPass = true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash cursor-pointer" viewBox="0 0 16 16">
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                        </svg>
                    </div>
                </div>
                <p v-show="error.password" class="text-red-600 text-xs text-end mt-1">{{ error.password }}</p>
            </div>
            <div class="mb-2">
                <div class="input-group flex flex-col text-start text-black text-sm font-light gap-2">
                    <label for="confirmpass">Confirm Password</label>
                    <div class="bg-[#FFF7DE] py-3 px-5 rounded-sm focus-within:border-[2.5px] border-black flex justify-between">
                        <input :type="[showConfPass ? 'text' : 'password']" name="confirmpass" id="confirmpass" placeholder="password123" class="bg-[#FFF7DE] text-black outline-none placeholder:text-gray-400 w-5/6" v-model="confirmPass">
                        <svg v-if="showConfPass" @click="showConfPass = false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye cursor-pointer" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                        <svg v-if="!showConfPass" @click="showConfPass = true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash cursor-pointer" viewBox="0 0 16 16">
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                        </svg>
                    </div>
                </div>
                <p v-show="error.confirmPass" class="text-red-600 text-xs text-end mt-1">{{ error.confirmPass }}</p>
            </div>
            <div class="flex justify-center mt-6">
                <button class="bg-primary text-white py-2 px-6 flex items-center gap-3" @click="next()" style="border-radius: 40px">
                    <p>NEXT</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3.56224 13.4062H17.7466L14.3646 9.11719C14.2685 8.99531 14.3552 8.8125 14.5122 8.8125H16.031C16.2607 8.8125 16.4787 8.91797 16.6193 9.09844L20.463 13.9734C20.8497 14.4656 20.5005 15.1875 19.8747 15.1875H3.56224C3.45912 15.1875 3.37474 15.1031 3.37474 15V13.5938C3.37474 13.4906 3.45912 13.4062 3.56224 13.4062Z" fill="white"/>
                    </svg>
                </button>
            </div>
            <div class="flex gap-2 justify-center mt-4">
                <p>Sudah punya akun?</p>
                <router-link to="/login"><p class="text-primary font-medium">Sign In</p></router-link>
            </div>
        </div>
        <div class="bg-white w-full md:w-[600px] flex flex-col py-12 px-8 md:px-16 gap-2 rounded-xl shadow-md" v-show="registerCard == 3">
            <div class="flex gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" @click="back()" width="28" height="28" viewBox="0 0 24 24" fill="none" style="transform: scaleX(-1);">
                    <path d="M3.56224 13.4062H17.7466L14.3646 9.11719C14.2685 8.99531 14.3552 8.8125 14.5122 8.8125H16.031C16.2607 8.8125 16.4787 8.91797 16.6193 9.09844L20.463 13.9734C20.8497 14.4656 20.5005 15.1875 19.8747 15.1875H3.56224C3.45912 15.1875 3.37474 15.1031 3.37474 15V13.5938C3.37474 13.4906 3.45912 13.4062 3.56224 13.4062Z" fill="black"/>
                </svg>
                <h3 class="text-start text-[32px] text-black font-bold mb-2">Sign Up</h3>
            </div>
            <div class="flex justify-between items-center">
                <p class="text-left text-black">Katru Tanda Mahasiswa</p>
                <p v-show="error.ktm" class="text-red-600 text-xs text-end mt-1">{{ error.ktm}}</p>
            </div>
            <div v-show="previewImg" class="flex justify-center">
                <img :src="previewImg" alt="" class="max-h-[200px] max-w-full h-auto w-auto">
            </div>
            <label v-show="!previewImg" for="ktm" class="bg-[#FFF7DE] w-full h-[200px] rounded-xl flex justify-center items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <g clip-path="url(#clip0_1093_341)">
                        <path d="M25.5992 38.4H38.3992V19.2H47.9992L31.9992 3.19995L15.9992 19.2H25.5992V38.4ZM61.8808 43.3023C61.2088 42.5856 56.7256 37.7888 55.4456 36.5376C54.5486 35.6777 53.3537 35.1984 52.1112 35.2H46.4888L56.2936 44.7808H44.9528C44.7986 44.7779 44.6465 44.8158 44.5116 44.8905C44.3768 44.9652 44.2641 45.0742 44.1848 45.2064L41.5736 51.2H22.4248L19.8136 45.2064C19.7338 45.0746 19.6209 44.966 19.4862 44.8914C19.3515 44.8167 19.1996 44.7786 19.0456 44.7808H7.70476L17.5064 35.2H11.8872C10.6168 35.2 9.40396 35.7088 8.55276 36.5376C7.27276 37.792 2.78956 42.5887 2.11756 43.3023C0.552758 44.9696 -0.308042 46.2976 0.101558 47.9392L1.89676 57.776C2.30636 59.4208 4.10796 60.7711 5.90316 60.7711H58.1016C59.8968 60.7711 61.6984 59.4208 62.108 57.776L63.9032 47.9392C64.3064 46.2976 63.4488 44.9696 61.8808 43.3023Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1093_341">
                        <rect width="64" height="64" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </label>
            <input type="file" name="ktm" id="ktm" hidden @change="prevImg">
            <div class="flex justify-center mt-6 gap-3">
                <label v-show="previewImg" for="ktm" class="bg-primary text-white py-2 px-6 flex items-center gap-3 cursor-pointer" style="border-radius: 40px">CHANGE IMAGE</label>
                <button class="bg-primary text-white py-2 px-6 flex items-center gap-3" @click="signUp()" style="border-radius: 40px">
                    <p>SIGN UP</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3.56224 13.4062H17.7466L14.3646 9.11719C14.2685 8.99531 14.3552 8.8125 14.5122 8.8125H16.031C16.2607 8.8125 16.4787 8.91797 16.6193 9.09844L20.463 13.9734C20.8497 14.4656 20.5005 15.1875 19.8747 15.1875H3.56224C3.45912 15.1875 3.37474 15.1031 3.37474 15V13.5938C3.37474 13.4906 3.45912 13.4062 3.56224 13.4062Z" fill="white"/>
                    </svg>
                </button>
            </div>
            <div class="flex gap-2 justify-center mt-4">
                <p>Sudah punya akun?</p>
                <router-link to="/login"><p class="text-primary font-medium">Sign In</p></router-link>
            </div>
        </div>
        <img src="../assets/human-illustration.png" alt="ilustrasi" class="absolute top-32 right-8 hidden md:block">
    </section>
</template>

<script>

import Navbar from '../components/Navbar.vue'

export default {
    name: 'Register',
    components: {
        Navbar
    },
    data() {
        return {
            user: {},
            error: {},
            confirmPass: "",
            previewImg: "",
            showPass: false,
            showConfPass: false,
            registerCard: 1
        }
    },
    methods: {
        next() {
            if(this.registerCard == 1) {
                console.log(this.user.name)
                if(!this.user.name) {
                    this.error.name = "nama tidak boleh kosong"
                } else {
                    this.error.name = null
                }
                if(!this.user.nim) {
                    this.error.nim = "nim tidak boleh kosong"
                } else {
                    this.error.nim = null
                }
                if(this.user.name && this.user.nim) {
                    this.registerCard++
                }
            }
            else if(this.registerCard == 2) {
                console.log(this.error)
                if(!this.user.email) {
                    this.error.email = "email tidak boleh kosong"
                } else {
                    this.error.email = null
                }
                if(!this.user.password) {
                    this.error.password = "password tidak boleh kosong"
                } else {
                    this.error.password = null
                }
                if(!this.confirmPass) {
                    this.error.confirmPass = "konfirmasi password tidak boleh kosong"
                } else if(this.confirmPass != this.user.password) {
                    this.error.confirmPass = "konfirmasi password harus sama"
                } else {
                    this.error.confirmPass = null
                }
                if(this.user.email && this.user.password && this.confirmPass && this.confirmPass == this.user.password) {
                    this.registerCard++
                }
            }
            console.log(this.user)
        },
        back() {
            this.registerCard--
        },
        signUp() {
            if(!this.user.ktm) {
                this.error.ktm = "gambar tidak boleh kosong"
            } else {
                this.error.ktm = null
            }
            console.log(this.user)
        },
        prevImg(e) {
            this.user.ktm = e.target.files[0]
            this.previewImg = URL.createObjectURL(e.target.files[0])
        },
        
    }
}
</script>