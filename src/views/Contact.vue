<template>

  <!-- MAIN WRAPPER -->
  <div class="bg-slate-950 text-white min-h-screen overflow-hidden">

    <!-- HERO SECTION -->
    <section class="relative h-[75vh] flex items-center justify-center">

      <!-- Background -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1600&auto=format&fit=crop"
          alt="Visit Rwanda Contact"
          class="w-full h-full object-cover"
        />

        <div class="absolute inset-0 bg-black/70"></div>
      </div>

      <!-- Glow -->
      <div
        class="absolute top-10 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"
      ></div>

      <!-- Content -->
      <div class="relative z-10 text-center px-6 max-w-4xl">

        <p class="uppercase tracking-[6px] text-green-300 mb-5">
          Get In Touch
        </p>

        <h1
          class="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Contact Visit Rwanda
        </h1>

        <p
          class="text-lg md:text-2xl text-gray-200 leading-relaxed"
        >
          We are here to help you discover the beauty of Rwanda
          and plan unforgettable travel experiences.
        </p>

      </div>

    </section>

    <!-- CONTACT SECTION -->
    <section class="py-24 px-6">

      <div
        class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start"
      >

        <!-- LEFT SIDE -->
        <div>

          <p class="uppercase tracking-[5px] text-green-400 mb-4">
            Contact Information
          </p>

          <h2 class="text-4xl md:text-5xl font-extrabold mb-8">
            Let’s Start Your Journey
          </h2>

          <p class="text-gray-400 text-lg leading-relaxed mb-10">
            Whether you want to explore gorilla trekking,
            luxury hotels, safaris, or cultural adventures,
            our team is ready to assist you.
          </p>

          <!-- CONTACT CARDS -->
          <div class="space-y-6">

            <!-- Card -->
            <div
              class="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-5 backdrop-blur-lg hover:-translate-y-2 transition-all duration-500"
            >

              <div
                class="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center text-3xl"
              >
                📍
              </div>

              <div>
                <h3 class="text-2xl font-bold mb-1">
                  Location
                </h3>

                <p class="text-gray-400">
                  Kigali, Rwanda
                </p>
              </div>

            </div>

            <!-- Card -->
            <div
              class="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-5 backdrop-blur-lg hover:-translate-y-2 transition-all duration-500"
            >

              <div
                class="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center text-3xl"
              >
                📞
              </div>

              <div>
                <h3 class="text-2xl font-bold mb-1">
                  Phone
                </h3>

                <p class="text-gray-400">
                  +250 788 123 456
                </p>
              </div>

            </div>

            <!-- Card -->
            <div
              class="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-5 backdrop-blur-lg hover:-translate-y-2 transition-all duration-500"
            >

              <div
                class="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center text-3xl"
              >
                ✉️
              </div>

              <div>
                <h3 class="text-2xl font-bold mb-1">
                  Email
                </h3>

                <p class="text-gray-400">
                  info@visitrwanda.com
                </p>
              </div>

            </div>

          </div>

          <!-- IMAGE -->
          <div class="mt-12">

            <img
              src="data:image/jpeg;base64,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"
              alt="Kigali Rwanda"
              class="rounded-3xl shadow-2xl w-full h-[350px] object-cover"
            />

          </div>

        </div>

        <!-- RIGHT SIDE -->
        <div
          class="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-2xl"
        >

          <h2 class="text-4xl font-extrabold mb-8">
            Send A Message
          </h2>

          <form class="space-y-6">

            <!-- Name -->
            <div>

              <label class="block mb-3 text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                class="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-500 transition"
              />

            </div>

            <!-- Email -->
            <div>

              <label class="block mb-3 text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                class="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-500 transition"
              />

            </div>

            <!-- Subject -->
            <div>

              <label class="block mb-3 text-gray-300">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                class="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-500 transition"
              />

            </div>

            <!-- Message -->
            <div>

              <label class="block mb-3 text-gray-300">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                class="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-500 transition resize-none"
              ></textarea>

            </div>

            <!-- Button -->
            <button
              type="submit"
              class="w-full bg-green-600 hover:bg-green-700 py-4 rounded-2xl text-lg font-bold transition-all duration-500 hover:scale-105"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>

    <!-- EXTRA SECTION -->
    <section class="py-24 px-6 bg-black/40">

      <div class="max-w-6xl mx-auto text-center">

        <p class="uppercase tracking-[5px] text-green-400 mb-4">
          Visit Rwanda
        </p>

        <h2 class="text-4xl md:text-6xl font-extrabold mb-8">
          Discover Africa’s Hidden Gem
        </h2>

        <p class="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
          Rwanda offers breathtaking landscapes, rich culture,
          wildlife adventures, and unforgettable travel experiences.
        </p>

        <!-- Cards -->
        <div class="grid md:grid-cols-3 gap-8">

          <!-- Card -->
          <div
            class="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition-all duration-500"
          >

            <img
              src="data:image/jpeg;base64,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"
              class="h-64 w-full object-cover"
            />

            <div class="p-6">

              <h3 class="text-2xl font-bold mb-3">
                Gorilla Trekking
              </h3>

              <p class="text-gray-400">
                Meet Rwanda’s incredible mountain gorillas.
              </p>

            </div>

          </div>

          <!-- Card -->
          <div
            class="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition-all duration-500"
          >

            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFhUVFRUVFxUYFRUVFxUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGA8QGi0dHR0tLS0tLS0tLS0tKy0tLSstLS0tLS0tLSsrLS0tLS0tLS0tLSsrLSstLS0tLS0tKy0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADwQAAEDAgQDBAcGBQUBAAAAAAEAAgMEESExQVEFEmETcYGRBhQiMqGx8AdSYnLB0RUjQlPhM0OCkvE0/8QAGAEBAQEBAQAAAAAAAAAAAAAAAQACAwT/xAAgEQEBAQACAwEBAAMAAAAAAAAAARECEgMxUSFBE3GB/9oADAMBAAIRAxEAPwB3s13kTIiU7JdHMFjETlVuVHiZdSDYxMRxIrIU3FEjSHFCmGRo8MV03HTrOnCsUKZjgTTIUeKFGku2BFZAnWxLjmWQSnq662FMtCIGhCLtjR2MVwERjVIuVzmRJ2dEpJliVIGrqOXNYFfMXnAL0HYNP+UJ9K3QBageSkiKrHSElemmoGlRlKAnRjGjotLKVFKAMLdy1auwSDzfIKTNaxOUwsu9nuFcYJC73boTpECacJczJRtzghyT7Jdz1Rz04BOZUcUIyIbpUoRVch9opdWLXVFW6isJ8FRrLpZjk3TlCEbTJmGlTdKwEXK0IWMWbTjPjp7IrIblPkNVo+VZ04pHT2COyNWCMGIKjjYIsJQnN3Fwl55nXAZ5YfqpNAvG6usOUyE+1gbdyE7ir25m/wBaqxa3Ve6wouONOY+K0YK5jhgfBWLT7croE1VbLFDdOkZ+JtacbhSMPkLt1BGNlmycbYOqvDxNrsArBrSflZCS3reKKZ22ufkVFCUJ7rIb6wWKz6ioJOacBt9syUnNVNGSUlk70rI5axnTEtWUrLUk6oTlQpxOlxK5zqjnKt0hdz1QyKheqkFODVua66GqgKJzJwOOFlA5Rzxqk5X2B270yI52gUWN250UWuq16hzEWFinMutcuTbUpXYJmNyzYpk1C4lZJ4q8bt1IW7pnmCyRIU0As90/Kimow8EEWqqA0dSkpKpoGDcd74hY9XWXccUs6uFs0ziNGqqsk3BPicknLUWwKFJNqlXPxuVvGdPBh1FguOlLRe6VfVEpeQ3GJVg0y/jB+8qniXMMTfvWU6PVVc1OLTM05vmiU1YQb3SBflqijFODW6ziiepa7mwN8V5qOI7p2nkss41rdkYDhqgyGyQNRfVUM+iMRl46pWQ2Ve2XC8lIDc5ULkV0YOtkpUQOGRBC1INWc8KrsdFWOPcqHP6xWsDojwUc8BEJKFI3opOOkuuNddWAbqfBVdJslKVFgM8VmvhL8OYpt8JdfHNdjiDMsTuU7gwD+HDf5qJnmOyiO1ON15VA5R7kMuXNo3HIm2VlsFkdqu9srFr0lNW3TfbLyTZ7HBMO4id1nqdatbUbnJBl4nYYC5WJUVhJzQm1Ceq0xVVJJQHTqjz1QnWWsZ0d1TcKrblA5gFx9WBknFpx7sMEMOGqSl4ibWsku3cdFdRrUmnCE2duuSQu7UK1zsnBrQHIclxwAOazzIUFznFWLW1FMEXnGd1hMLt0YSFXVa2O3G6qZxusyMJqMhGHTYcVdkh1CWaSjsNtUFc45K8Zshly5dSMEt2QXNCrdVddKVfKAk56h17DFMNh3z7lOVrU7ASEb3HQJpsYaMVWSq2S5cSrVgz5dkIXzVQbKplCkLzndRL86ii3XPVOZBfKRoh9q7ZZxGChPKG6dw0QjKTonEZElkOSdAcShOanBozpkPt7aoRahSRpxnRZazYoBmO6VkaVVryEo7znqiMS7KloVTxDuUmtEAmoqZueHmvPt4p1R2cXRhbLo1UUvQnwWY7jPd8EMcYf94qyrW16ofugd6LHRM1I8FgfxY6lFZxXuRlWvQDhLDkfkVR3BSsdvE0VnGCNSPEqyrY1G8JIzC46lskRxr8R81Q8XJ1PmjKdh10RVOW2qHFxBpzKKXg5FScurAobkN0isQ5eql6CJF1zlYkfIlnvJV3OQ3JxaGSqPmViFXlTg0IuJXOTqjcqgYog8nVdR+RRSPl4U7VKcxQ3ORhNulQnTgJbm6qjo7pwGH1IS81ULZqrqQrg4ffMpZJy1pGRQDVuK1hwa+q4/wBHjo4K1M5pda5S07ytkcFeMykZ6S2d0plF5Vhco/YhGijaFIGKmumGUPenontCbjlB0UirODEi4V28MW3A6+ibawbLOnHn2cLRRwgbLa5mojeTdWrGCOFBcdw1ejHIoS3ojsseYPDygSUbhovVOY05WS8tOrVjyzrjREiqCtaekSwpADktQLwSk6oM9WL2VKmUNHKM0hZanFnTwrOi763uVnlyjBda6rWiakIfrd8EsafZWigIOaMi1aSV18lZjnHBFdGdlemYb4DFFaWjjOqZjhunqfh5t7RsVowwMbkLkarlebc4sX1F+yi3jI3ZRZ71rq8kZFW6ALorWLowuAmoWhBjhTUTEVCsaF3s7nBXaxFaQEaVWtU5lx77qNZdQNQC+KFXUYfsixmyuEaWG7gTb5qw4E3da7iqultotbRhFnB2DVEFJE3Eusic5Oiz6umviXJgWquNMZ7gCxanjz3FMO4dzb26hJTUIBzHknIFRxk9USPjXel5Ihql3NYnE24uMfiTkPFAcyvMAN3RGi2Suq17KGYHEFaEDb6rw8Ne5qfpuOkZq6DXoauEtzOCxKyR5ysBvfFaVPxtjsC299FoN4H2ov2XKDlzENt5m61Jntm3fTxhbY79c1VxXqh6Ey/34baYuv4jlXT6FSD/AHoj4uH6Lffj9HXk8eQSnKKlLiAvVReh1veezzP7LboOCxxi1xfdY5eTjPRnGvMxcKwtqrs4VZe0joW6AWVv4cFwvkdZweSFIVGUtsz5L1M1G0JCWlCx2bnFlcrQjMR3wgKvKjWsV5RsuIl1EF4hjUeMIYRGld3EwxEDktz21VTWgaoR4PK7bdZv8T6oUvESVYmyJ2jVQ1bdwvOOn3UFSAnE9RHUsP8AUAjMqG7jzXkXV7RoFT+IXyHxKuq17QuByPkVCxeRg4o5qej427b4q6jW6QFAGjM4rJZWudoFY1RGasWn64tDSWi5Xj+IVMlzotKrqpHYNw6lZctA92ZJWpAyKiqduk3Su6r0cXCTqy6IODv0FluCvL8797IsVRIMivRjgGriL96Yp+AXNm3PcFqMViU9S4+8Lr0HCeBPlsSC1n3jr+UarQbwOOBvaTPZG0avIA6DqeiyeJ/aC1o5KUcx/uyNs3/hHme91u4q34v9vZGWGkjLwyOJoGMjyAT05jiT0F15Lin2nAG0EZf+J3sN7wLXPiAvDVta+d/PNI57t3Y26BowaOgsqsLRkPh/lM8X0XyZ6ehl+0atOQjHcD+6GftArNWt8CR87rFbIPu5dyq6QZcufX91v/HPjP8Alr01H9oJ/wB2KQdWPLvMYL0vBuNtqv8A55S5wzjc60mGoYQC4dRdfMyxqGIRe4zBuDexBGRBGRCL4/hnkn9faoqmdup8f/Fs0PE5yMWc48L+Y/VfLOCen9RCAydvrDBhzE8soH57EO8Rc7r6Z6L8ZpKsc0EntgXdGfYkb3tHvDqLhcPJwsn7HXhd9VqmsBwLXNds4fI5FI1EhT1Sd1lylebHeBOkQzIqSPQuZWHTHaKJbFdVi15prV0MXPWQNFG1A1+S6uTpACE+EHRXMzVcOadVIi+iG5Qn0Z0WkQqFOpnClOpt4Ib6Y7/BaRK4pM5tKDmiNoQMvJO2VgE6C7KcdyIyK2RKNZTkOiQGRY3GHcitkvmudg8okVE7UqToI0Ctzm1kzFRlOQ8P6I1M1vNsUSIX37luw8P6LJ9JePU9GLOs+a12xA497z/Q3vxOgKZVY7UOhhYZZnNY0auOuwGZPQYryXFPtFOLKWIAZdo/5hg/U+C8vxziUtXJ2kpywawYNYNmj5nM/JVkFsSF148PrF5SLVdVNO7mmkc93U4Do1uTR3BdZCiRsRgu0kjjy5WgBiIyNFDdVZma2w46GyEWft3Jh2Dl2YXsfAqBYxK4j6I7bH61+rKO01VpCMIPyVmMLXBzSWuBuHAkEHcEYg9yOz6G/QqweL/orTj1no/9oEsdo6sGVmXagDtG/mGTx1wPUr39G6KoZ2kErZG62zb0c04tPQgL4yXA/v8Aui0b3Rv543ujeNWuLT5jTovN5PDOX7Px34eSz3+vr0nDShGjsvJ8J9PqhnszsE7d8I3/APZo5XeIB6rch9PaJ3viWI/iZzDv/llx+C8nLxeSfzXonk406aYqLjfSCiOIq4LHeRrT4tdYjxUWc5fG9n15B7wf6R8EAtGyZ5FZsK7ORExLgYdkPjHFooARcOk0jBxv+K3uhZc/pW0xewwiUi1jYsad76+S1ONovKRvMJXTdeRpvSqYEc7WOaM7DlcfG9gfBegg9IqVwbd5aXaFp9k/idlbrdV4WCcpTpXE76suerrDRUK4RuxRY4FagI401FAq1NVDCLyyNZ0J9o9zRifJeb4p6XlwLadpYMu0cBzf8W5N7zc9AtSW+hbI3+LcThpm3kd7RF2xjF7vDQdTgvMS+m0xPsQxtGzuZ58wW/JYPY3Jc4kk4kk3JO5JzRhA3uXacOM9uN5cr6es4H6cjmDamMBp/rjDsPzMJJI7sehX0WKppxCJzNGIv7nMOW+19+ma+Fv5RgDdVNT/AEjf45XWeXj430ePOz29r6VfaA5xMVHdjMjMRaR35AfcHXPuXgXEklxJJJuXG5LidycSequ7wxzVQfJdOPGcZ+McuVq8UYzN121/0CoXdV0kLWs4uDhdXjBKCT8NlcPT2WGT10H0F0kaWt+6U7RcdIjTg0jssVdr/DqlO1C46VXYdTRd18vrBWL/AKy8Uj6xZTtyrsep9sgtjiVx01/DLcJET7ld7bqrssaAm+tCiNm+tllGfdWE1t1dllbAm6qkkgWYyQ42P13q/aX6K0iOv0XUIX3UVoelk9L4wSGROcNCSG38LE2WbWeklRJcNIjafu+9b8xx8rJGKAI4aBsuUnGOlvKs/sCu9inXSt3CDJMNFvsx0KmNUcxEfLbbzQHuP0LK7wda0+GccmgwY+7fuO9pngNPCy9NH6bQ9nd8bhJlyNsQeocch8e9eCGZuRfxPwso5jBbG57j5Lnyy/x147P69NWenEh/04mM6nmkP6ALIqPSOofg6Z4GzSGDu9myy5HX28rDy0VmRnO5wyw+SJJGt+jMnGdr7m+JPVFbWjZLNfhi0XvhgNc9PmoLkDAXvfAZ94GCRkOetHQHvyCFJNuR54qTVTrY5nO1gLjoEKMON8LDPKw+AxVKsW5yfofuqB+NkSJ5xBAsMsB+qrE04gE32OXXAJ2jI6XuwFjvl+y4L3tY3/Kfkruf7NzgTra4FtvIrtNEDmSfgB3DdZ7/AMPWKtjd90+RXHS2wOqsGPJ9l7jncEcobp9YLrKMtILrOA0Fza/S2P8AhM56rxjreb7p77IbZSbkDBuZwsD5pslptca3BINiTbw81JI3OJBLBYe6Wh2Fs7+KO1XWF4S5xwGGpyt3C+KNUU4bb+YCCbe78/ayXGU7WYnPLZuOwUqSeXAn2gLHMHxtbdXa7+HIBU2b949eX2fO6ExzTb+aAduUj4kqvZOPvE2HefBV7DYE9cP2/VJkh/1Af3LYXP8ALtjqLc+PeuN4a45PHfy2x2zzQ2VDw3lDdLXPz6osYfymzml3diehF1i2xTAZYWtI/mg3vkwk2yvYO3uPBUfCcCLkHC4aSR3tzV5ob48zmuvlcW8LZaqF9iW80mGAIfiOlrplp/BW0YwJLrWxJAbY7WJJRIoos3SEtGOZAw6j6wS80bxiXyBxubYm5xuTd1/gu09M4gOa42BxaAARbWwyKtv1ZFnRR85POOQ3secmx2xFj3HFcjlIc3/TczLAtF988Qe5XNNYe86xNzc5m1rH2cUq2nLXX9kj7tjYg6YhUq/GxeLUs8SbriyvUvxgdLO/RRX/AEZC7a91kRtQ5yiiTy4yOk2F7E+IVmOJO3mVFFOY0gtgB12VXw4Y2G2Z81FFIMxDCxx1wt8UQxi9jn8fNdUUg5AMsN8cc/BcJAzN7aafFRRSWuRbAdPoIhG4F/goopLinbiSMB/5+yUq5wLcpy79wb381FFjn6b4T9XiqWWFxjr1ONvkiPrGjAC+OI188AoosdrjXWaVlqiDbPAG1truQm1hAzOONhgMc7KKLnuOnWU9QVLrH/HnkmjVY2vicCOtrnGyii3LkYs21HVLSeW+XTL91OX+q2dseh3soot24xgbpQDmd7j/ACrPf7N8/h4qKJ0LNaRgcNc0N1tTfzuuqLM5WnATIMiDYYXvf4Ic7BhYnpgNPDuXFFpGqeD72mR5jj4KdnzOw/RRRUorpY7PDE21+V8FftSL4knW+VtbDvsookKumcBi1ptY7H4FBZPG67gCBc6u6YYOCiiP61PWk5Kxtz73mVFFFyvPl9dunF//2Q=="
              class="h-64 w-full object-cover"
            />

            <div class="p-6">

              <h3 class="text-2xl font-bold mb-3">
                Volcano Adventures
              </h3>

              <p class="text-gray-400">
                Explore Rwanda’s breathtaking mountains and nature.
              </p>

            </div>

          </div>

          <!-- Card -->
          <div
            class="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition-all duration-500"
          >

            <img
              src="data:image/jpeg;base64,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"
              class="h-64 w-full object-cover"
            />

            <div class="p-6">

              <h3 class="text-2xl font-bold mb-3">
                Lake Kivu
              </h3>

              <p class="text-gray-400">
                Relax beside Rwanda’s beautiful lakes and beaches.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  </div>

</template>

<script setup>
// Vue logic here
</script>

<style scoped>

html {
  scroll-behavior: smooth;
}

input,
textarea {
  color: white;
}

</style>