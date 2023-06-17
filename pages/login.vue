<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <AtomsTypographyH2> Sign in to your account </AtomsTypographyH2>

    <div>
      <AtomsButton
        class="mt-3"
        label="Github"
        @click="auth.signInWithOAuth({ provider: 'github' })"
      >
        Github
      </AtomsButton>
    </div>
  </div>
</template>

<script>
const user = useSupabaseAuthClient();
const { auth } = useSupabaseAuthClient();

watchEffect(() => {
  if (user.value) {
    navigateTo("/tasks");
  }
});
</script>
