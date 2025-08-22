'use server'

import { createComment, getAllComments, getCommentById } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function createCommentAction(formData: FormData) {
  try {
    const content = formData.get('content') as string
    const authorId = formData.get('authorId') as string
    const parentId = formData.get('parentId') as string | null

    if (!content?.trim()) {
      throw new Error('Comment content is required')
    }

    if (!authorId) {
      throw new Error('Author ID is required')
    }

    const comment = await createComment({
      content: content.trim(),
      authorId,
      parentId: parentId || null
    })

    revalidatePath('/')
    return { success: true, comment }
  } catch (error) {
    console.error('Error creating comment:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to create comment' 
    }
  }
}

export async function getCommentsAction() {
  try {
    const comments = await getAllComments()
    return { success: true, comments }
  } catch (error) {
    console.error('Error fetching comments:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to fetch comments' 
    }
  }
}

export async function getCommentAction(id: string) {
  try {
    const comment = await getCommentById({ id })
    return { success: true, comment }
  } catch (error) {
    console.error('Error fetching comment:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to fetch comment' 
    }
  }
}
