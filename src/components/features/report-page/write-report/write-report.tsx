"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  setReports: React.Dispatch<React.SetStateAction<any[]>>;
  reports: any[];
};

type Inputs = {
  adi: string;
  soyadi: string;
  grammer: string;
  vocabulary: string;
  pronunciation: string;
  comprehension: string;
  homework: string;
  participation: string;
  comment: string;
};

function WriteReport({ setReports, reports }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setReports([data, ...reports]);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md grid grid-cols-2 gap-4 h-max'
    >
      {/* Adi */}
      <div className='mb-4'>
        <label
          htmlFor='username'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Adi
        </label>
        <input
          type='text'
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
          {...register("adi")}
        />
        {errors.adi && (
          <p className='text-red-500 text-xs mt-1'>{errors.adi.message}</p>
        )}
      </div>

      {/* Soyadi */}
      <div className='mb-4'>
        <label
          htmlFor='soyadi'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Soyadı
        </label>
        <input
          type='text'
          {...register("soyadi")}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
        />
        {errors.soyadi && (
          <p className='text-red-500 text-xs mt-1'>{errors.soyadi.message}</p>
        )}
      </div>

      {/* grammer */}
      <div className='mb-4'>
        <label
          htmlFor='grammer'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Grammer
        </label>

        <select
          {...register("grammer")}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>

        {errors.soyadi && (
          <p className='text-red-500 text-xs mt-1'>{errors.soyadi.message}</p>
        )}
      </div>
      {/* Vocabulary */}
      <div className='mb-4'>
        <label
          htmlFor='grammer'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Grammer
        </label>

        <select
          {...register("grammer")}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>

        {errors.grammer && (
          <p className='text-red-500 text-xs mt-1'>{errors.grammer.message}</p>
        )}
      </div>
      {/* Pronunciation */}
      <div className='mb-4'>
        <label
          htmlFor='pronunciation'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Pronunciation
        </label>

        <select
          {...register("pronunciation")}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>

        {errors.pronunciation && (
          <p className='text-red-500 text-xs mt-1'>
            {errors.pronunciation.message}
          </p>
        )}
      </div>
      {/* Comprehension */}
      <div className='mb-4'>
        <label
          htmlFor='comprehension'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Comprehension
        </label>

        <select
          {...register("comprehension")}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>

        {errors.comprehension && (
          <p className='text-red-500 text-xs mt-1'>
            {errors.comprehension.message}
          </p>
        )}
      </div>
      {/* Homework */}
      <div className='mb-4'>
        <label
          htmlFor='homework'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Homework
        </label>

        <select
          {...register("homework")}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>

        {errors.homework && (
          <p className='text-red-500 text-xs mt-1'>{errors.homework.message}</p>
        )}
      </div>
      {/* Participation */}
      <div className='mb-4'>
        <label
          htmlFor='participation'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Participation
        </label>

        <select
          {...register("participation")}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>

        {errors.soyadi && (
          <p className='text-red-500 text-xs mt-1'>{errors.soyadi.message}</p>
        )}
      </div>
      {/* Comments */}
      <div className='mb-4 col-span-2'>
        <label
          htmlFor='soyadi'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Soyadı
        </label>
        <textarea
          {...register("comment")}
          className='w-full min-h-[100px] px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
        />
        {errors.comment && (
          <p className='text-red-500 text-xs mt-1'>{errors.comment.message}</p>
        )}
      </div>

      <Button type='submit' className='w-full col-span-2'>
        EKLE
      </Button>
    </form>
  );
}

export default WriteReport;
