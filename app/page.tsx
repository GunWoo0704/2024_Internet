"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100vh]">
      <nav className="w-full py-4 bg-black text-white flex justify-end px-4">
        <div className="space-x-4">
          <Link href="#home" className="hover:underline">
            홈
          </Link>
          <Link href="#projects" className="hover:underline">
            작업물
          </Link>
          <Link href="#about" className="hover:underline">
            자기소개
          </Link>
          <Link href="#contact" className="hover:underline">
            연락처
          </Link>
        </div>
      </nav>
      <section className="flex-grow flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  송건우
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  개발자 호소인 | 클라이언트 프로그래머
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  저는 게임 개발자가 되기 위해 C++과 언리얼을 공부하고 있는 대학생 송건우입니다.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="#about"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  더보기
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                >
                  문의하기
                </a>
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
        className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center bg-white"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  소개
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  언리얼과 C++를 사용하여 콤보 액션 게임을 개발하고 있습니다.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">사용 기술</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    C, C++, Unreal, Git
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">소속</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sogang Game Education University
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">학년</h3>
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
        className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center bg-white"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                참여한 프로젝트
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                사진을 누르시면 GitHub로 링크 연결이 됩니다.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <Link
                href="https://github.com/GunWoo0704/Project-Null.git"
                legacyBehavior
              >
                <a
                  href="https://github.com/GunWoo0704/Project-Null.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
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
              <Link
                href="https://github.com/GunWoo0704/9-Team-Unclear.git"
                legacyBehavior
              >
                <a
                  href="https://github.com/GunWoo0704/9-Team-Unclear.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
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
              <Link
                href="https://github.com/GunWoo0704/SOng-Test.git"
                legacyBehavior
              >
                <a
                  href="https://github.com/GunWoo0704/SOng-Test.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
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
        className="w-full py-12 md:py-24 lg:py-32 bg-white flex items-center justify-center"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                문의하기
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                질문이 있으시거나 관심이 있으신 분은 하단을 참고해주세요.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 w-full max-w-md space-y-4">
            <form>
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input id="name" placeholder="이름을 작성해주세요." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일을 작성해주세요"
                />
              </div>
              <div className="space-y-4">
                <Label htmlFor="message">메세지</Label>
                <Textarea
                  id="message"
                  placeholder="메세지를 작성해주세요"
                  className="min-h-[100px]"
                />
              </div>
              <div
                className="w-full mt-4 text-center text-gray-500 border border-gray-200 p-2 rounded-md cursor-not-allowed"
                style={{ cursor: "not-allowed" }}
              >
                메일 보내기
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
