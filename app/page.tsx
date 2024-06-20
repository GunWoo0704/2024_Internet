import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] items-center justify-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  송건우
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Code Monkey | Game Engineer
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  I&apos;m a passionate software engineer with expertise in
                  building scalable and user-friendly web applications.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Learn More
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <img
              src="/new.png"
              width="2000"
              height="4000"
              alt="seohee"
              className="mx-auto overflow-hidden rounded-xl object-contain w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section
        id="about"
        className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Me
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I am currently developing a combo action game using Unreal
                  Engine, C++.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Skills</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    C, C++, Unreal, Git
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Education</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sogang Game Education University
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Experience</h3>
                  <p className="text-gray-500 dark:text-gray-400">Junior</p>
                </div>
              </div>
            </div>
            <img
              src="/1.gif"
              width="550"
              height="310"
              alt="About"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                My Projects
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                사진을 누르시면 GitHub로 링크 연결이 됩니다.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <Link href="https://github.com/GunWoo0704/Project-Null.git" legacyBehavior>
                <a className="block">
                  <img
                    src="/2.png"
                    width="550"
                    height="310"
                    alt="Project 1"
                    className="aspect-video overflow-hidden rounded-t-xl object-cover"
                  />
                  <CardContent className="space-y-2 p-4">
                    <h3 className="text-lg font-bold">Project : Null</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                    콤보 액션 게임입니다. 언리얼 5.2.1을 사용했으며 현재 개발중인 프로젝트입니다.
                    </p>
                  </CardContent>
                </a>
              </Link>
            </Card>
            <Card>
              <Link href="https://github.com/GunWoo0704/9-Team-Unclear.git" legacyBehavior>
                <a className="block">
                  <img
                    src="/23.jpg"
                    width="550"
                    height="310"
                    alt="Project 1"
                    className="aspect-video overflow-hidden rounded-t-xl object-cover"
                  />
                  <CardContent className="space-y-2 p-4">
                    <h3 className="text-lg font-bold">Unclear</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      언리얼 5.0.3을 이용해 개발했으며 FPS 슈팅 게임이며 몬스터를 물리치면서 탈출하는 게입입니다.
                    </p>
                  </CardContent>
                </a>
              </Link>
            </Card>
            <Card>
              <Link href="https://github.com/GunWoo0704/SOng-Test.git" legacyBehavior>
                <a className="block">
                  <img
                    src="/back.png"
                    width="550"
                    height="310"
                    alt="Project 1"
                    className="aspect-video overflow-hidden rounded-t-xl object-cover"
                  />
                  <CardContent className="space-y-2 p-4">
                    <h3 className="text-lg font-bold">Last Leap</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      2023 넥슨 게임잼에서 개발한 퍼즐 게임입니다.
                    </p>
                  </CardContent>
                </a>
              </Link>
            </Card>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a project in mind or just want to say hello? Fill out the
                form below and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 w-full max-w-md space-y-4">
            <form>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[100px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
