<template>
    <div class="register">
        <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <a href="" class=""><img src="/img/bilisbenta-logo-login.png" alt="" class="img-fluid mx-auto d-block my-3"></a>
                <div class="card border-0 rounded-0">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-md-9 p-4">
                                <p class="text-muted">Create account</p>
                                <form method="POST" action="">

                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                                        </div>
                                        <input id="email" type="email" class="form-control" name="email" required autocomplete="email" autofocus placeholder="Email Address">
                                    </div>

                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span>
                                        </div>
                                        <input id="password" type="password" class="form-control" name="password" required autocomplete="current-password" placeholder="Password">
                                    </div>

                                    <div class="input-group mb-3">
                                        <div class="">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                                <label class="form-check-label text-muted" for="remember">Remember Me</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-5">
                                            <button type="submit" class="btn btn-primary px-2">Sign up</button>
                                        </div>
                            
                                    </div>
                                </form>
                            </div>
                            <div class="col-md-3 bg-primary">
                                <div class="py-4">
                                    <h5 class="text-light pt-3">Already have an account?</h5>
                                    <router-link class="btn btn-outline-light" to="/login">Login</router-link>
                                    <!--<a href="" class="btn btn-outline-light">Sign Up</a>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register"
}
</script>

<style scoped>
      
.register {
    padding-top: 10%;
    background-image: url('/img/login-background.png');
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
</style>