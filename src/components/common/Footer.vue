<template>
  <footer class="footer-section">
    <div class="container mx-auto px-4 md:px-6">

      <!-- Main footer grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 py-10 md:py-14">

        <!-- Company links -->
        <div class="text-center md:text-left">
          <h3 class="footer-heading font-['Hind_Siliguri']">কোম্পানী</h3>
          <!-- Desktop list -->
          <ul class="hidden md:block space-y-3">
            <li v-for="(item, i) in company" :key="i">
              <nuxt-link :to="item.link" target="_blank" class="footer-link font-['Hind_Siliguri']">
                {{ item.label }}
              </nuxt-link>
            </li>
          </ul>
          <!-- Mobile inline -->
          <div class="md:hidden flex flex-wrap justify-center gap-x-4 gap-y-2">
            <nuxt-link v-for="(item, i) in company" :key="i" :to="item.link" target="_blank"
              class="footer-link font-['Hind_Siliguri']">
              {{ item.label }}
            </nuxt-link>
          </div>
        </div>

        <!-- Contact -->
        <div class="text-center">
          <h3 class="footer-heading font-['Hind_Siliguri']">যোগাযোগ</h3>
          <ul class="space-y-3">
            <li v-for="(item, i) in contact" :key="i" class="footer-contact-item font-['Hind_Siliguri']">
              <span class="contact-label">{{ item.label }}</span>
              <span class="contact-value">{{ item.link }}</span>
            </li>
          </ul>
        </div>

        <!-- Download & Social -->
        <div class="text-center md:text-right">
          <h3 class="footer-heading font-['Hind_Siliguri']">ডাউনলোড করো</h3>
          <div class="flex justify-center md:justify-end gap-3 mb-5">
            <a href="https://apps.apple.com/us/app/etestpaper/id6749287735" target="_blank" class="store-badge">
              <img src="/icon/apple.webp" alt="Download on App Store" class="h-[42px] md:h-[48px] rounded-lg" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.nextive.eTestPaper" target="_blank"
              class="store-badge">
              <img src="/icon/android.webp" alt="Get it on Google Play" class="h-[42px] md:h-[48px] rounded-lg" />
            </a>
          </div>
          <div class="flex justify-center md:justify-end gap-3">
            <a v-for="(item, i) in footerSocialInfo" :key="i" :href="item.link" target="_blank" class="social-icon">
              <Icon :name="item.icon" class="text-[22px] md:text-[26px]" />
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-[#0d568b]/10"></div>

      <!-- SSL Banner & Copyright -->
      <div class="py-6 text-center">
        <div class="flex justify-center mb-4">
          <img loading="lazy" src="/banner/sslBanner.jpg" alt="SSL Commerz" class="w-full" />
        </div>
        <p class="text-slate-600 text-[13px] md:text-[15px] font-[600] font-['Hind_Siliguri']">
          স্বত্ব {{ currentYear }} ই-টেস্টপেপার কর্তৃক সর্বস্বত্ব সংরক্ষিত
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

const company = [
  { label: 'আমাদের সম্পর্কে', link: 'https://www.etestpaper.net/about' },
  { label: 'প্রাইভেসি পলিসি', link: 'https://www.etestpaper.net/about/privacy' },
  { label: 'টার্মস অ্যান্ড কন্ডিশন', link: 'https://www.etestpaper.net/about/terms' },
  { label: 'রিফান্ড পলিসি', link: 'https://www.etestpaper.net/about/refund' },
];

const contact = [
  { label: 'Support', link: '01646664222' },
  { label: 'Email', link: 'contact.etestpaper@gmail.com' },
  { label: 'Trade License', link: 'TRAD/DNCC/042640/2023' },
  { label: 'Address', link: 'Mohammadpur, Dhaka - 1207' },
];

const footerSocialInfo = [
  { link: 'https://www.facebook.com/etestpaper', icon: 'ph:facebook-logo-fill' },
  { link: 'https://wa.me/+8801646664222', icon: 'ph:whatsapp-logo-fill' },
  { link: 'https://www.youtube.com/@eTestPaperBD', icon: 'ph:youtube-logo-fill' },
];
</script>

<style lang="scss" scoped>
.footer-section {
  background: #f4f4f4;
}

.footer-heading {
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #0d568b, #2f8ce2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
}

.footer-link {
  font-size: 15px;
  font-weight: 600;
  color: #334155;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #0d568b;
  }

  @media (min-width: 768px) {
    font-size: 16px;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #0d568b, #2f8ce2);
      border-radius: 1px;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
}

.footer-contact-item {
  font-size: 14px;
  color: #334155;

  @media (min-width: 768px) {
    font-size: 16px;
  }
}

.contact-label {
  font-weight: 700;
  color: #0d568b;

  &::after {
    content: ' : ';
  }
}

.contact-value {
  font-weight: 600;
}

.store-badge {
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);

    img {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    }
  }

  img {
    transition: box-shadow 0.3s ease;
  }
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(13, 86, 139, 0.08);
  color: #0d568b;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #0d568b, #2f8ce2);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(13, 86, 139, 0.25);
  }

  @media (min-width: 768px) {
    width: 46px;
    height: 46px;
    border-radius: 14px;
  }
}

.ssl-banner {
  max-height: 100%;
  opacity: 0.85;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 768px) {
    max-height: 50px;
  }
}
</style>
