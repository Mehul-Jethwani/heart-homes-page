-- Add UPDATE and DELETE policies to stories table for user ownership
CREATE POLICY "Users can update their own stories"
ON public.stories
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own stories"
ON public.stories
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);