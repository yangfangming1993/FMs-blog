
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Supabase 环境变量缺失：请检查 .env 中的 VITE_SUPABASE_URL 与 VITE_SUPABASE_ANON_KEY 是否存在，并重启开发服务器。"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
            