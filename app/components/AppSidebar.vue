<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Icon } from "@iconify/vue";
const { $t, getLocales } = useI18n();

const route = useRoute();
const isActive = (href: string) => {
  const path = route.path;

  const localeCodes = getLocales().map((l) => `/${l.code}`);
  const prefix = path.split("/")[1] ? "/" + path.split("/")[1] : "";

  let normalized = localeCodes.includes(prefix)
    ? path.replace(/^\/[a-zA-Z-]+/, "")
    : path;

  // ensure "/" behavior
  if (normalized === "") normalized = "/";

  return "/" + normalized.split("/")[1] === href;
};
export interface SidebarItem {
  name: string;
  href: string;
  icon: string;
}

const sidebarItems: SidebarItem[] = [
  {
    name: "home",
    href: "/",
    icon: "",
  },
  {
    name: "wine",
    href: "/wine",
    icon: "",
  },
  {
    name: "events",
    href: "/events",
    icon: "",
  },
  {
    name: "about-us",
    href: "/about-us",
    icon: "",
  },
  {
    name: "contact",
    href: "/contact",
    icon: "",
  },
];
</script>

<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader class="p-10">
        <i18n-link
          to="/"
          class="flex flex-col gap-2 items-center w-full justify-center"
        >
          <div class="border-2 border-sidebar-primary rounded-full p-3">
            <Icon
              icon="streamline-cyber:wine-bottle-glass"
              class="text-sidebar-primary font-extrabold text-4xl"
            />
          </div>
          <span
            class="truncate font-semibold text-sidebar-foreground text-xl uppercase"
            >Alazare</span
          >
        </i18n-link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup class="p-10">
          <SidebarGroupContent>
            <SidebarMenu class="gap-4">
              <SidebarMenuItem
                v-for="sidebarItem in sidebarItems"
                :key="sidebarItem.href"
              >
                <SidebarMenuButton
                  as-child
                  :class="
                    isActive(sidebarItem.href)
                      ? 'text-sidebar-primary border-b border-sidebar-primary rounded-none '
                      : ''
                  "
                >
                  <i18n-link
                    :to="sidebarItem.href"
                    class="flex items-center justify-center"
                  >
                    <Icon
                      v-if="sidebarItem.icon"
                      :icon="sidebarItem.icon"
                      class="size-3 text-primary"
                    />
                    <span class="text-lg uppercase relative inline-block">
                      <span
                        v-if="isActive(sidebarItem.href)"
                        class="absolute left-0 bottom-0 h-1 bg-sidebar-primary rounded-none animate-[grow_0.35s_ease-out_forwards]"
                      ></span>
                      {{ $t(sidebarItem.name) }}
                    </span>
                  </i18n-link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter class="flex p-10 gap-6">
        <LanguageSwitcher />
        <SocialMedia />
        <div class="text-center text-xs">
          Copyright &copy {{ new Date().getFullYear() }}
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <div class="flex flex-1 flex-col gap-4 min-h-screen relative">
        <SidebarTrigger
          class="md:hidden absolute top-2 left-2 z-10 text-wine-white p-2 bg-sidebar"
        />
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
