<template>
    <div class="page-layout">
      <Header />

      <main class="page-content">
        <slot />
      </main>

      <Footer />
    </div>
</template>

<style>

.page-content {
  width: 100%;
  min-height: 100vh;
}

</style>
