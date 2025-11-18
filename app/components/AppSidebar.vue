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

const route = useRoute();
const isActive = (href: string) => {
  return route.path === href;
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
];

</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <NuxtLink href="/" class="flex gap-2 items-center w-full">

                <div
                  class="grid flex-1 text-left text-sm leading-tight transition-all duration-300 group-has-[[data-collapsible=icon]]/sidebar-wrapper:hidden"
                >
                  <span class="truncate font-semibold">Wine</span>
                </div>
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem
                v-for="sidebarItem in sidebarItems"
                :key="sidebarItem.href"
              >
                <SidebarMenuButton
                  as-child
                  :class="
                    isActive(sidebarItem.href)
                      ? 'bg-accent text-accent-foreground border border-primary'
                      : ''
                  "
                >
                  <NuxtLink :href="sidebarItem.href">
                    <Icon
                        v-if="sidebarItem.icon"
                      :icon="sidebarItem.icon"
                      class="size-3 text-primary"
                    />
                    <span>{{ $t(sidebarItem.name) }}</span>
                  </NuxtLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
footer
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
