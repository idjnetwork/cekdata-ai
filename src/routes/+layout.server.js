// src/routes/+layout.server.ts

import { fail, redirect } from '@sveltejs/kit'

/** @type {import('./types').PageServerLoad} */

export const load = async ({ locals: { supabase, safeGetSession } }) => {
  const { session } = await safeGetSession()

  ////////////////////////////////////
  // THIS CODE MAY CAUSE INFINITE LOOP
  // if (!session) {
  //   redirect(303, '/signin')
  // }
  ////////////////////////////////////

  if (session) {
    // const { data: profile } = await supabase
    //   .from('profiles')
    //   .select(`username, full_name, website, avatar_url`)
    //   .eq('id', session.user.id)
    //   .single()
  
    return { session }
  }
}

